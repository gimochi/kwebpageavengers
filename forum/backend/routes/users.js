var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:user_sq', function(req, res, next) { //회원정보 가져오기
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) { //회원등록
  res.send('respond with a resource');
});

router.put('/:user_sq', function(req, res, next) { //회원정보 수정
  res.send('respond with a resource');
});

router.delete('/:user_sq', function(req, res, next) { //회원 탈퇴
  res.send('respond with a resource');
});

router.post('/pwFind', function(req, res, next) { //비밀번호 찾기
  res.send('respond with a resource');
});

router.post('/idFind', function(req, res, next) { //아이디 찾기
  res.send('respond with a resource');
});

module.exports = router;
