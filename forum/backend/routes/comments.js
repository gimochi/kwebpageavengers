var express = require('express');
var router = express.Router();
var models = require('../model');


router.get('/list/:board_sq', function(req, res, next) { //해당게시물 댓글목록 가져오기
  console.log("GET, /api/comments/list/:board_sq 해당게시글 댓글들 가져오기");
  models.comments.findAll({
    where : {
      board_sq : req.params.board_sq,
      del_yn : 'N'
    }
  }).then(function(comments){
    if(comments.length == 0){
        res.json({
          status: 'GET COMMENTS FAIL',
          code: '0302'
        })
    } else {
      res.json({
        status: 'GET COMMENTS SUCCESS',
        code: '0000',
        data: comments
      })
    }
  });
 
});

router.post('/', function(req,res,next){ //댓글등록하기

  console.log("POST, /api/comments/  댓글 등록");
  models.comments.create({
    user_sq : req.decoded.user_sq,
    board_sq : req.body.board_sq,
    contents : req.body.contents,
    del_yn : 'N'
  }).then(function(comments){
    res.json({
      status: 'POST COMMENTS SUCCESS',
      code: '0000'
    })
  });
});


router.put('/:comments_sq', function(req,res,next){ //댓글수정하기

 console.log("PUT, /api/comments/:comments_sq, 댓글 수정하기");
  models.comments.update({
    contents : req.body.contents
  }, {
      where: {
       comments_sq : req.params.comments_sq,
       user_sq : req.decoded.user_sq,
       del_yn : 'N'
      }
  }).then(function(comments) {
    res.json({
      status: 'PUT COMMENTS SUCCESS',
      code: '0000'
    })
  });
});

router.put('/:comments_sq', function(req,res,next){ //댓글삭제하기

console.log("DELETE, /api/comments/:comments_sq, 게시물 삭제하기");

  models.comments.update({
    del_yn : 'Y'
  }, {
      where: {
       comments_sq : req.params.comments_sq,
       user_sq : req.decoded.user_sq,
       del_yn : ' N'
      }
  }).then(function(comments) {
    res.json({
      status: 'DELETE COMMENTS SUCCESS',
      code: '0000'
    })
  });
});
 

module.exports = router;
