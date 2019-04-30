const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
 try {
  res.sendFile('index.html');
  //res.status(501).json({ message: ' / not Implemented so far' });
 } catch (err) {
  return next(err);
 }

});

module.exports = router;