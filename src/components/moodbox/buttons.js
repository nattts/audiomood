const json = require('./mood.json');
import * as h from 'utils/helpers.js';

const moods = async () => {
 const moodObj = await h.moodMap(json);
 return Object.keys(moodObj);
};

// return array of divs with button element inside
const buildButtons = async moodsArr => {
 try {
  return await h.divBatch(moodsArr, h.createButton);
 }
 catch(e) { throw new Error ('error in buildButtons');}
};


export const getButtons = async () => {
 try {
  const moodsArray = await moods(json);
  return await buildButtons(moodsArray);
 }
 catch(e) { throw new Error ('error in getdButtons');}
};

