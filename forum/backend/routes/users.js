var express = require('express');
var models = require('../model');
var router = express.Router();
var jwt = require('jsonwebtoken');
var crypto = require('crypto');

var jwt_secret = "KwEbSeCrEtKeY123!@#";
router.post('/login', function(req, res, next) { //로그인

  console.log("POST, /api/users/login 로그인하기");

  //비밀번호 암호화해서 비교하
  var shasum = crypto.createHash('sha1');
  shasum.update(req.body.pw);
  var output = shasum.digest('hex');

  models.user.findAll({
    where : {
      id : req.body.id,
      pw : output,
      del_yn : 'N'
    }
  }).then(function(user){
    if(user.length != 1){
      console.log("실패")
      res.json({
        status: 'Login Failed',
        code: '0002'
      })
    } else {
      jwt.sign(
        {
          id : user[0].id,
          name: user[0].name,
          student_id: user[0].student_id,
          user_sq : user[0].user_sq,
          auth_sq : user[0].auth_sq
        },
        jwt_secret,
        {
          expiresIn: '7d',
          issuer: 'kweb.korea.ac.kr',
          subject: 'userInfo'
        },
        function(err, token){
          res.json({
            status: 'Login Success',
            code: '0001',
            token: token
          })
        }
      );
    }

  });
});


router.post('/join', function(req, res, next) { //회원등록
  console.log("POST, /api/users/join 회원가입");

  //비밀번호 암호화
  var shasum = crypto.createHash('sha1'); // shasum은 Hash 클래스의 인스턴스입니다.
  shasum.update(req.body.pw);
  var output = shasum.digest('hex');

  models.user.create({
     id : req.body.id,
     pw : output,
     name : req.body.name,
     email : req.body.email,
     student_id : req.body.student_id
  }).then(function(user){ //TODO 실패했을때 처리코드
    res.json({
      status: 'Join Success',
      code: '0101',
    })
  });
});

router.post('/checkId', function(req,res,next){ //아이디 중복체크 
  console.log("POST, /api/users/checkId 아이디중복체크");
  models.user.findAll({
    where : {
      id : req.body.id
    }
  }).then(function(user){
    if(user.length == 0){
      res.json({
        status: 'ID Available',
        code: '0201',
      })
    } else {
      res.json({
        status: 'ID Not Available',
        code: '0202',
        data: user
      })
    }
  })
});



// router.put('info/:user_sq', function(req, res, next) { //회원정보 수정
//   res.send('respond with a resource');
// });

// router.delete('/secession/:user_sq', function(req, res, next) { //회원 탈퇴
//   res.send('respond with a resource');
// });

// router.post('/pwFind', function(req, res, next) { //비밀번호 찾기
//   res.send('respond with a resource');
// });

// router.post('/idFind', function(req, res, next) { //아이디 찾기
//   res.send('respond with a resource');
// });


module.exports = router;
