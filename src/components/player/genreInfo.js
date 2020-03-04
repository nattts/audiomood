
//takes genre info stored on the track element and 
//displays currently played genre above the tracks

export const genre_info = async e => {
	const genre_info = document.querySelector('.genre-info');
	const genre = e.target.getAttribute('data-genre');
	genre_info.innerHTML = genre;

};
