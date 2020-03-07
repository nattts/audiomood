import json from 'components/moodbox/mood';
import fetch from 'isomorphic-fetch';

//gets the genre according to the chosen mood
const getGenre = mood => {
	if (!mood) throw new Error('cannot get genre.');
	for (let m in json) {
		if (m === mood) return json[m];
	}
};

const createQuery = mood => {
	if (!mood) throw new Error('cannot create query.');
	const genre = getGenre(mood);
	const count = 10;
	const source = `https://api-v2.hearthis.at/categories/${genre}/?page=1&count=${count}`;
	return source; 
};

//return a huge json from API request
const fetcher = mood => {
	if (!mood) throw new Error('fetching failed. argument is not provided');
	const query = createQuery(mood);	
	return new Promise((resolve, reject) => {
		return fetch(query)
			.then(response => {
				if (response) resolve(response);
				reject(new Error('cant fetch'));
			});
	}); 
};

//return exactly 7 entries & gets back needed entries
const cutDownByNumber = fetchedJson => {
	if (!Array.isArray(fetchedJson) || !fetchedJson.length) throw new Error('no json provided ');
	const entriesToFetch = 7;
	return fetchedJson.filter((entries,index) => index < entriesToFetch)
		.reduce((acc, obj) => {
			let o = {};
			o['title'] = obj.title;
			o['genre'] = obj.genre;
			o['src'] = obj.stream_url;
			acc.push(o);
			return acc;
		}, []);	
};

//return sorted array of objects
export const data = mood => {
	try {
		return fetcher(mood)
			.then(result => result.json())
			.then(j => cutDownByNumber(j)) 
			.catch(err => console.log(' promise catcher', err));
	} catch(err) {
		console.log(err);
	}
};

 