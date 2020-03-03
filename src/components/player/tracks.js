import * as helper from 'utils/helpers.js';

const getTrackElements = async data => {
	try {
		let batch = await helper.elementBatch(data, helper.createTrackElement);
		return batch;
	}
	catch(e) { throw new Error ('error in getting track elements');}
};

export const display = async data => {
	try {
		let divsArr = await getTrackElements(data);
		return await helper.attach(divsArr,'.playlist');
	}
	catch(e) { throw new Error ('error in displaying tracks');}
};

