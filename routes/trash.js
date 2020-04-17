var express = require('express');
var router = express.Router();
var trashController = require('../controllers/trash')

router.get('/', trashController.getTest);




module.exports = router;
