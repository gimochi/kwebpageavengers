var express = require('express');
var board = require('./board');
var users = require('./users');
var router = express.Router();


router.use('/board', board);
router.use('/users', users);




module.exports = router;
