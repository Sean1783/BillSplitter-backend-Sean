var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello, this is a GET response from Andrew.');
});

module.exports = router;
