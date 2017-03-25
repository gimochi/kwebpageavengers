var express = require('express');
var router = express.Router();
var multer = require('multer');
var models = require('../model');
var Q = require('q');

var upload = function (req, res) { //파일 업로드 함수
  var deferred = Q.defer();
  var imagePath = "tmp/upload";
  var storage = multer.diskStorage({
    // 서버에 저장할 폴더
    destination: function (req, file, cb) {
      cb(null, imagePath);
    },

    // 서버에 저장할 파일 명
    filename: function (req, file, cb) {
      timestamp = new Date().getTime().toString()
      file.uploadedFile = {       
        name: timestamp,
        ext: file.mimetype.split('/')[1]
      };
      cb(null, file.uploadedFile.name + '.' + file.uploadedFile.ext);
    }
  });

  var upload = multer({ storage: storage }).single('file');
  upload(req, res, function (err) {
    if (err) deferred.reject();
    else deferred.resolve(req.file.uploadedFile);
  });
  return deferred.promise;
};

/* Create new image */
router.post('/upload', function(req, res, next) {  //파일 업로드
  upload(req, res).then(function (file) {
      models.files.create({
      file_name : file.name,
      file_ext : file.ext,
    }).then(function(board){
      console.log(" FIle Upload SUCCESS");
      res.status(200).send('respond with a resource'+file);
    });
  }, function (err) {
    res.send(500, err);
  });
});




module.exports = router;
