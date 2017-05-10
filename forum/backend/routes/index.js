var express = require('express');
var board = require('./board');
var comments = require('./comments');
var users = require('./users');
var files = require('./files');
var router = express.Router();
var jwt = require('jsonwebtoken');


var jwt_secret = "KwEbSeCrEtKeY123!@#";

router.use('/board', checkAuth);
router.use('/board', board);
router.use('/comments', checkAuth);
router.use('/comments', comments);
router.use('/users', users);
router.use('/files/', files);



function checkAuth (req,res,next) {
  var token = req.headers['x-access-token'];
  if (!token) {
    return res.status(403).json({
      status: "NOT LOGINED",
      code: "1010"
    })
  } else {
    jwt.verify(token,
      jwt_secret,
      function (err, decoded) {
        if (err) {
          return res.status(500).json({
            status: "INTERNAL ERROR",
            code: "111111"
          })
        } else {
          req.decoded = decoded;
          next();
        }
      })
  }
};

module.exports = router;
