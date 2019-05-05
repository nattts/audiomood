const events = require('events').EventEmitter;
export const ee = new events.EventEmitter();


import { reset } from 'utils/helpers.js';


ee.on('reset', async () => await reset());