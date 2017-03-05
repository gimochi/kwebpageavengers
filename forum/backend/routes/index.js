var express = require('express');
var board = require('./board');
var users = require('./users');
var files = require('./files');
var router = express.Router();


router.use('/board', board);
router.use('/users', users);
router.use('/files/', files)




module.exports = router;
