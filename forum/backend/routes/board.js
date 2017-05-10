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
      if(board.length == 0){
        res.json({
          status: 'GET BOARD FAIL',
          code: '0302'
        })
      } else {
        res.json({
          status: 'GET BOARD SUCCESS',
          code: '0301',
          data: board
        })
      }
  });
 
});

router.post('/', function(req,res,next){ //게시글등록하기

  console.log("POST, /api/board/  게시물등록");

  models.board.create({
    user_sq : req.decoded.user_sq,
    board_type : req.body.board_type,
    title : req.body.title,
    contents : req.body.contents,
    del_yn : 'N'
  }).then(function(board){
    res.json({
      status: 'POST BOARD SUCCESS',
      code: '0401'
    })
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
    if(board.length == 0){
      res.json({
        status: 'GET BOARD_DETAIL FAIL',
        code: '0502'
      })
    } else {
      res.json({
        status: 'GET BOARD_DETAIL SUCCESS',
        code: '0501',
        data: board
      })
    }
  });
 
});

router.put('/:board_sq', function(req,res,next){ //게시글수정하기

 console.log("PUT, /api/board/:board_sq, 게시물 수정하기");
  models.board.update({
    title : req.body.title,
    contents : req.body.contents
  }, {
      where: {
       board_sq : req.params.board_sq,
       user_sq : req.decoded.user_sq,
       del_yn : 'N'
      }
  }).then(function(board) {
    res.json({
      status: 'PUT BOARD SUCCESS',
      code: '0601'
    })
  });
});

router.delete('/:board_sq', function(req,res,next){ //게시글삭제하기

console.log("DELETE, /api/board/:board_sq, 게시물 삭제하기");
  models.board.update({
    del_yn : 'Y'
  }, {
      where: {
       board_sq : req.params.board_sq,
       user_sq : req.decoded.user_sq,
       del_yn : 'N'
      }
  }).then(function(board) {
    res.json({
      status: 'DELETE BOARD SUCCESS',
      code: '0701'
    })
  });
});
 

module.exports = router;
