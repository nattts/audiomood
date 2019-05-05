const json = require('components/moodbox/mood.json');
import * as h from 'utils/helpers.js';
import fetch from 'isomorphic-fetch';

export const getGenre = async mood => {
 const moodObj = await h.moodMap(json);
 for (let m in moodObj) {
  if (m === mood) {
   return moodObj[m];
  }
 }
};

export const createQuery = async e => {
 const genre = await getGenre(e);
 //const count = 5;
 const source = `https://api-v2.hearthis.at/categories/${genre}/`;
 //const source = `https://api-v2.hearthis.at/categories/${genre}/?page=1&count=${count}`;
 return source; 
};


//return a huge json from API
export const fetcher = async e => {
 try { 
  const query = await createQuery(e);
  const fetched = await fetch(query);
  return await fetched.json();
 }
 catch(e){
  throw new Error('error with fetching');
 }
 
};

//return exactly 5 entries
export const data = async (e) => {
 const json = await fetcher(e);
 return json.filter((x,i) => i < 5)
  .map((y) => {
   return {
    title: y.title,
    genre: y.genre,
    src: y.stream_url
   };
  });
};








 