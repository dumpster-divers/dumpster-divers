var express = require('express');
var indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', function(req, res, next) {
  res.send("<H1>Library System</H1>");
});

module.exports = indexRouter;
