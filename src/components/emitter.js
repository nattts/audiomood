const events = require('events').EventEmitter;
export const eventEmitter = new events.EventEmitter();


import { resetPlaylist, resetGenre  } from 'components/player/reset.js';



eventEmitter.on('resetPlaylist', async () => await resetPlaylist());

eventEmitter.on('resetGenre', async () => await resetGenre());