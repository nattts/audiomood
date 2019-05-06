const json = require('components/moodbox/mood.json');
import * as helper from 'utils/helpers.js';
import fetch from 'isomorphic-fetch';

//gets the genre according to the chosen mood
export const getGenre = async mood => {
 try {
  const moodObj = await helper.parse(json);
  for (let m in moodObj) {
   if (m === mood) {
    return moodObj[m];
   }
  }
 }
 catch(e){ throw new Error('error in getting genre');}
};


export const createQuery = async e => {
 try {
  const genre = await getGenre(e);
  const count = 10;
  const source = `https://api-v2.hearthis.at/categories/${genre}/?page=1&count=${count}`;
  return source; 
 }
 catch(e){ throw new Error('error in creating query');}
};


//return a huge json from API request
const fetcher = async e => {
 try { 
  const query = await createQuery(e);
  const fetched = await fetch(query);
  return await fetched.json();
 }
 catch(e){ throw new Error('error with fetching');}
 
};

const filterByNumber = async (e,number) =>{
 try {
  const json = await fetcher(e);
  return json.filter((x,i) => i < number);
 }
 catch(e){ throw new Error('error in filtering');}
};

//return exactly 7 entries
export const data = async e => {
 try {
  const entriesToFetch = 7;
  const filtered = await filterByNumber(e, entriesToFetch);

  return filtered.map(y => 
   ({
    title: y.title,
    genre: y.genre,
    src: y.stream_url
   })

  );
 }
 catch(e){ throw new Error('error in getting data');}
};









 