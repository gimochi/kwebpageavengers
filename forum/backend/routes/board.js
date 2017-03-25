var express = require('express');
var router = express.Router();
var models = require('../model');



router.get('/list/:board_type', function(req, res, next) { //게시글목록
  console.log("GET, /api/board/list/:board_type 게시물목록");
  models.board.findAll({
    where : {
      board_type : req.params.board_type,
      del_yn : 'N'
    }
  }).then(function(board){
     console.log("게시물 목록 SUCCESS");
     console.log("가져온값"+board);
     res.setHeader('Content-Type', 'application/json');
     res.send(JSON.stringify(board));
  });
 
});

router.post('/', function(req,res,next){ //게시글등록하기
  var sess = req.session;

  console.log("POST, /api/board/  게시물등록");
  models.board.create({
    user_sq : sess.user_sq,
    board_type : req.body.board_type,
    title : req.body.title,
    contents : req.body.contents,
    del_yn : 'N'
  }).then(function(board){
     console.log(" 게시물 등록 SUCCESS");
     res.send('respond with a resource'+req.params.board_type);
  });
});


router.get('/:board_sq', function(req,res,next){ //게시글가져오기
  console.log("GET, /api/board/:board_sq, 게시물 상세가져오기");
  models.board.findAll({
      where: {
       board_sq: req.params.board_sq,
       del_yn : 'N'
      }
  }).then(function(board) {
    console.log("SUCCESS");
    console.log("가져온값"+board);
   res.setHeader('Content-Type', 'application/json');
   res.send(JSON.stringify(board));
  });
 
});

router.put('/:board_sq', function(req,res,next){ //게시글수정하기
    var sess = req.session;
 console.log("PUT, /api/board/:board_sq, 게시물 수정하기");
  models.board.update({
    title : req.body.title,
    contents : req.body.contents
  }, {
      where: {
       board_sq : req.params.board_sq,
       user_sq : sess.user_sq,
       del_yn : 'N'
      }
  }).then(function(board) {
    console.log("SUCCESS");
    console.log("가져온값"+board);
   res.setHeader('Content-Type', 'application/json');
   res.send(JSON.stringify(board));
  });
});

router.delete('/:board_sq', function(req,res,next){ //게시글삭제하기
    var sess = req.session;
console.log("DELETE, /api/board/:board_sq, 게시물 삭제하기");
  models.board.update({
    del_yn : 'Y'
  }, {
      where: {
       board_sq : req.params.board_sq,
       user_sq : sess.user_sq,
       del_yn : 'N'
      }
  }).then(function(board) {
    console.log("SUCCESS");
   res.setHeader('Content-Type', 'application/json');
   res.send(JSON.stringify(board));
  });
});
 

module.exports = router;
