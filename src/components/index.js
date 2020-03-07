import { getButtons } from 'components/moodbox/buttons';
import { play } from 'components/moodbox/choice';
import * as helper from 'utils/helpers';


export const run = json => {
	if (!Object.keys(json).length || 
		Object.keys(json).some(e => e === "" ) || 
		Object.values(json).some(e => e === "")) {
		confirm('come back later')
		throw new Error ('error with json');
	} 
	try {
		const buttons = getButtons(json);
		const moodbox = helper.attach(buttons, '.button-list');
		play(moodbox, json);
	} catch(e) {
		throw new Error(e);
	}
};

