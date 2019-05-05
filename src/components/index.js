import { getButtons } from 'components/moodbox/buttons.js';
import { chooseMood } from 'components/moodbox/choice.js';
import * as helper from 'utils/helpers.js';
const json = require('components/moodbox/mood.json');

export const run = async() => {
 const buttons = await getButtons(json);
 const moodbox = await helper.attach(buttons,'.button-list');
 await chooseMood(moodbox);
};
