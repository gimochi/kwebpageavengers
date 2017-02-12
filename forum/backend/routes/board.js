var express = require('express');
var router = express.Router();


router.get('/list/:board_type', function(req, res, next) { //게시글목록
  res.send('respond with a resource'+req.params.board_type);
});

router.post('/', function(req,res,next){ //게시글등록하기
  res.send('board add SUCCESS');
});

router.get('/:board_sq', function(req,res,next){ //게시글가져오기
  res.send('board get SUCCESS');
});

router.put('/:board_sq', function(req,res,next){ //게시글수정하기
  res.send('board put SUCCESS');
});

router.delete('/:board_sq', function(req,res,next){ //게시글삭제하기
  res.send('board delete SUCCESS');
});

module.exports = router;
