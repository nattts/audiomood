import * as helper from 'utils/helpers.js';


//return array of moods from mood object parsed from json
const moods = async json => {
 try {
  const moodObj = await helper.parse(json);
  return Object.keys(moodObj);
 }
 catch(e) { throw new Error ('error in getting array of moods');}
};




/**

takes in JSON with mood/genre pairs, creates array from moods,
which gets passed to Batch and return an array of created HTML elements

*/

export const getButtons = async (json) => {
 try {
  const moodsArray = await moods(json);
  return await helper.elementBatch(moodsArray, helper.createButton);
 }
 catch(e) { throw new Error ('error in getdButtons');}
};

