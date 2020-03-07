import 'babel-polyfill';

export const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const randomMood = json => {
	if (json) {
		let min = 1;
		let max = Object.keys(json).length-1;
		return  Object.keys(json)[randomInteger(min, max)];	
	}
};

/**
creates a single <h1></h1> with following attributes
*/
export const createTrackElement = obj => {
	if (!Object.keys(obj).length || !Object.values(obj).length) {
		throw new Error ('error @createTrackElement() ');
	}
	let { title, genre, src } = obj;
	const h1 = document.createElement('h1');

	h1.className = 'track';
	h1.innerHTML = `${title}`;
	h1.setAttribute('data-src', `${src}`);
	h1.setAttribute('data-genre', `${genre}`);
	h1.setAttribute('style', 'background-color: ');
	return h1;
};


/**
 dynamically creates a single button within a div
 @param {name}: name of the genre
*/

export const createButton = name => {
	if (!name || typeof name !== 'string') {
		throw new Error ('argument must not be empty and be a valid string @createButton() ');
	}
	const div = document.createElement('div');
	const button = document.createElement('BUTTON');
	button.className = 'btn btn-outline-secondary';
	button.setAttribute('style', 'background-color: ');
	button.innerHTML = `${name}`;
	div.appendChild(button);
	return div;
};


/**
returns array of button elements 
@param {arr}: array of moods
@param {cb}: function creteButton
*/

export const elementBatch = (moodArray, cb) => {
	if (moodArray === undefined || !moodArray.length || typeof cb !== 'function') {
		throw new Error('illegal argument: args must be a non-empty array and a callback function @elementBatch()');
	} 
	return moodArray.map((moodName) => cb(moodName));
};

//to attach elements to the parent element in the DOM

export const attach = (elementsArr, parentDOMelement) => {
	if (!elementsArr.length) {
		throw new Error ('error @attach()');
	}
	const parent = document.querySelector(`${parentDOMelement}`);
	elementsArr.forEach((item) => parent.appendChild(item));
	return parent;
};

export const display = data => {
	if (!data.length || !Array.isArray(data)) throw new Error('arg must be non empty array');
	let batch = elementBatch(data, createTrackElement);
	return attach(batch,'.playlist');
};











