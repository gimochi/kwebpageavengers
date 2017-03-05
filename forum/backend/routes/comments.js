var express = require('express');
var router = express.Router();
var models = require('../model');


router.get('/list/:board_sq', function(req, res, next) { //해당게시물 댓글목록 가져오기
  console.log("GET, /api/board/list/:board_type 게시물목록");
  models.board.findAll({
    where : {
      board_type : req.params.board_type
    }
  }).then(function(board){
     console.log("댓글 목록 SUCCESS");
     console.log("가져온값"+board);
     res.setHeader('Content-Type', 'application/json');
     res.send(JSON.stringify(board));
  });
 
});

router.post('/', function(req,res,next){ //댓글등록하기
  console.log("POST, /api/board/  게시물등록");
  models.board.create({
    user_sq : req.params.user_sq,
    board_sq : req.params.board_sq,
    contents : req.params.contents,
    del_yn : 'N'
  }).then(function(board){
     console.log(" 댓글 등록 SUCCESS");
     res.send('respond with a resource');
  });
});


router.put('/:comments_sq', function(req,res,next){ //댓글수정하기
 console.log("PUT, /api/board/:board_sq, 게시물 수정오기");
  models.board.update({
    contents : req.params.contents
  }, {
      where: {
       comments_sq : req.params.comments_sq
      }
  }).then(function(board) {
    console.log("SUCCESS");
    console.log("가져온값"+board);
   res.setHeader('Content-Type', 'application/json');
   res.send(JSON.stringify(board));
  });
});

router.delete('/:comments_sq', function(req,res,next){ //댓글삭제하기
console.log("DELETE, /api/board/:board_sq, 게시물 삭제하기");
  models.board.update({
    del_yn : 'Y'
  }, {
      where: {
       comments_sq : req.params.comments_sq
      }
  }).then(function(board) {
    console.log("SUCCESS");
   res.setHeader('Content-Type', 'application/json');
   res.send(JSON.stringify(board));
  });
});
 

module.exports = router;
