import * as helper from 'utils/helpers.js';

//return array of moods from mood object parsed from json
const moods = async json => {
 try {
  const moodObj = await helper.moodMap(json);
  return Object.keys(moodObj);
 }
 catch(e) { throw new Error ('error in getting array of moods');}
};

// return array of divs with button element inside
const buildButtons = async moodsArr => {
 try {
  return await helper.elementBatch(moodsArr, helper.createButton);
 }
 catch(e) { throw new Error ('error in buildButtons');}
};


export const getButtons = async (json) => {
 try {
  const moodsArray = await moods(json);
  return await buildButtons(moodsArray);
 }
 catch(e) { throw new Error ('error in getdButtons');}
};

