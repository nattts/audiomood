import * as helper from 'utils/helpers.js';
import { getButtons } from 'components/moodbox/buttons.js';
import { choose } from 'components/moodbox/choice.js';


export const run = async() => {
 const buttons = await getButtons();
 const moodbox = await helper.attach(buttons,'.button-list');
 await choose(moodbox);
};



//ee.emit('reset', prop.preBuiltTrackContainer);




















