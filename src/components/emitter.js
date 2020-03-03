import {resetPlaylist, resetGenre} from 'components/player/reset.js';
const events = require('events').EventEmitter;
export const eventEmitter = new events.EventEmitter();

eventEmitter.on('resetPlaylist', async () => await resetPlaylist());
eventEmitter.on('resetGenre', async () => await resetGenre());
