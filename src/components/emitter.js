import { resetPlaylist, resetGenre } from 'components/player/reset.js';
const events = require('events').EventEmitter;

export const eventEmitter = new events.EventEmitter();

eventEmitter.on('resetPlaylist', () => resetPlaylist());
eventEmitter.on('resetGenre', () => resetGenre());
eventEmitter.on('deHighlight', (element) => element.style.backgroundColor = "");
