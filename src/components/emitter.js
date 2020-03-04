import { resetPlaylist, resetGenre } from 'components/player/reset.js';
import * as helper from 'utils/helpers.js';
const events = require('events').EventEmitter;

export const eventEmitter = new events.EventEmitter();

eventEmitter.on('resetPlaylist', async () => await resetPlaylist());
eventEmitter.on('resetGenre', async () => await resetGenre());
eventEmitter.on('deHighlight', element => helper.de_highlight(element));
