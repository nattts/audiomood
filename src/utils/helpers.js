import 'babel-polyfill';

export const parse = async json => JSON.parse(JSON.stringify(json));

//creates a single div with following attributes
export const divBuilder = async obj => {

 try {
  let { title,genre,src } = obj;
  const div = document.createElement('div');
  div.className = `${title}`;
  div.innerHTML = `${genre}`;
  div.setAttribute('data-src', `${src}`);
  div.setAttribute('data-genre', `${genre}`);
  div.setAttribute('style', 'background-color: ');
  return div;
 }
 catch(e) { throw new Error ('error in divBuilder');}
};

//creates a single button within a div
// @param {name}: name of the genre
export const createButton = async name => {
 try {
  const div = document.createElement('div');
  const button = document.createElement('BUTTON');
  button.className = 'btn btn-outline-secondary';
  button.setAttribute('style', 'background-color: ');
  button.innerHTML = `${name}`;
  div.appendChild(button);
  return div;
 }
 catch(e) { throw new Error ('error in createButton');}
};

//returns array of divs
export const divBatch = async(arr, cb) => {

 try {
  return Promise.all(arr.map(async(x) => {
   return await cb(x);
  }) );
 }
 catch(e) { throw new Error ('error in divBatch');}
};

export const attach = async (divsArr, parentElement) => {
 try {
  const parent = document.querySelector(`${parentElement}`);
  divsArr.forEach(async(x) => {
   parent.appendChild(await x);  
  });
  return parent;
 }
 catch(e) { throw new Error ('error in attaching');}
};

export const moodMap = async json => {
 try {
  return await parse(json);
 }
 catch(e) { throw new Error ('error in parseData');}
};

//takes in js object of mood/genre
export const getMoods = async moodMap => {
 return Object.keys(moodMap);
};

export const getGenres = async moodMap => {
 return Object.keys(moodMap);
};


export const reset = async () => {
 const playlist = document.querySelector('.playlist');
 if (playlist.hasChildNodes()){
  Array.from(playlist.childNodes)
   .forEach((item) => item.parentNode.removeChild(item));
 } 
};











