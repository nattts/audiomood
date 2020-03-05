import * as helper from 'utils/helpers.js';

/**

takes in JSON with mood/genre pairs, creates array from moods,
which gets passed to Batch and return an array of created HTML elements

*/

export const getButtons = json => {
	if (!Object.keys(json).length) {
		confirm('come back later')
		throw new Error ('error with json');
	} else {
		const moodsArray = Object.keys(json);
		return helper.elementBatch(moodsArray, helper.createButton);	
	}
};


