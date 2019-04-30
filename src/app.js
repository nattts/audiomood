const express = require('express');
const router = require('routers/api');
const app = express();
const cors = require('cors');


app.use(express.static(__dirname + '/static/'));
app.use(cors());


app.use('/', router);

// handle errors
app.use((error, _, res, next) => {
 console.error(error);
 res.status(error.status || 500).json({ message: error.message });
 next();
});

module.exports = app;