var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("<H1>Library System</H1>");
});

module.exports = router;
