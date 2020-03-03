const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		res.sendFile('index.html');
	} catch (err) {
		return next(err);
	}

});

module.exports = router;
