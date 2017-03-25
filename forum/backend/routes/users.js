var express = require('express');
var models = require('../model');
var router = express.Router();


/* GET users listing. */
router.post('/login', function(req, res, next) { //로그인 
  var sess;
  sess = req.session;
  console.log("POST, /api/users/login 로그인하기");
  models.user.findAll({
    where : {
      id : req.body.id,
      pw : req.body.pw,
      del_yn : 'N'
    }
  }).then(function(user){
    console.log("로그인 SUCCESS");
    sess.user_sq = user.user_sq;
    sess.id = req.body.id;
    sess.name = user.name;
    sess.email = user.email;
    sess.auth_sq = user.auth_sq;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(user));
  });
});


router.post('/logout', function(req, res, next) { //로그아웃하기
   sess = req.session;
   if(sess.username){
            req.session.destroy(function(err){
                if(err){
                    console.log(err);
                }else{
                    console.log(" 로그아웃 성공");
                    res.send('logout SUCCESS');
                }
            })
        }else{
            console.log(" 로그아웃 에라ㅓ");
            res.send('logout ERRROR');
        }

});

router.post('/join', function(req, res, next) { //회원등록
  console.log("POST, /api/users/join 회원가입");
  console.log("sibal"+req.body.id + " " + req.body.pw + " " + req.body.name + " " + req.body.email + "  " +req.body.student_id);
  models.user.create({
     id : req.body.id,
     pw : req.body.pw,
     name : req.body.name,
     email : req.body.email,
     student_id : req.body.student_id
  }).then(function(user){
    console.log("회원가입 SUCCESS");
    res.send('JOIN SUCESS');
  });
});

router.post('/checkId', function(req,res,next){ //아이디 중복체크 
  console.log("POST, /api/users/checkId 아이디중복체크");
  models.user.findAll({
    where : {
      id : req.body.id
    }
  }).then(function(user){
    console.log("아이디가져오기성공");
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(user));
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
