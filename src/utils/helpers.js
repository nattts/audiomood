import 'babel-polyfill';

//export const parse = json => JSON.parse(JSON.stringify(json));

export const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const randomMood = json => {
	let min = 1;
	let max = Object.keys(json).length-1;
	return  Object.keys(json)[randomInteger(min, max)];
};

export const de_highlight = async buttonElement => buttonElement.style.backgroundColor = "";


/**
creates a single <h1></h1> with following attributes
*/
export const createTrackElement = obj => {
	try {
		let { title, genre, src } = obj;
		const h1 = document.createElement('h1');

		h1.className = 'track';
		h1.innerHTML = `${title}`;
		h1.setAttribute('data-src', `${src}`);
		h1.setAttribute('data-genre', `${genre}`);
		h1.setAttribute('style', 'background-color: ');
		return h1;
	}
	catch(e) { 
		throw new Error ('error in createTrackElement');
	}
};


/**
 creates a single button within a div
 @param {name}: name of the genre
*/

export const createButton = name => {
	try {
		const div = document.createElement('div');
		const button = document.createElement('BUTTON');
		button.className = 'btn btn-outline-secondary';
		button.setAttribute('style', 'background-color: ');
		button.innerHTML = `${name}`;
		div.appendChild(button);
		return div;
	}
	catch(e) { 
		throw new Error ('error in createButton');
	}
};

export const elementBatch = (arr, cb) => {
	try {
		return arr.map((x) => {
			return cb(x);
		}) ;
	}
	catch(e) { 
		throw new Error ('error in elementBatch');
	}
};



//to attach elements to the paren element in the DOM
export const attach = (elementsArr, parentElement) => {
	try {
		const parent = document.querySelector(`${parentElement}`);
		elementsArr.forEach((item) => {
			parent.appendChild(item);  
		});
		return parent;
	}
	catch(e) { 
		throw new Error ('error in attach');
	}
};













