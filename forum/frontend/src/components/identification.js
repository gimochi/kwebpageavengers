import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

var Identification = React.createClass({
  getInitialState() {
    return {

     pw_fun:function(){ // 변경확인 버튼, 비밀번호 바꾸는 정보수정 부분
        var pwd = $('#id_password').val();
        var pwdc = $('#id_password_check').val();
        if(pwd.length > 4 && pwd.length < 12 && pwdc.length > 4 && pwdc.length <12){
          if(pwd != pwdc) {
            alert('비밀번호확인이 같지 않습니다!');
          }
          else{
            /*
              비밀번호 변경해주는 코드
              + 기존비밀번호랑 같은지 체크...
            */
            alert('변경 성공!');
            history.go(0);
          }
        }
        else{
          alert('비밀번호는 5자이상 12자미만이어야 합니다.');
        }
     }
    };
   },

   render:function () {
      var userinfo = ["채호경", "은수저 (정회원)", "2015410019", "ckdwhzjarhk@naver.com", "ckdwhzjarhk"];
      return(
          <div className="container">
              <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 toppad">
                      <div className="panel panel-default">
                          <div className="panel-heading" role="tab">
                              <h3 className="panel-title text-center">프로필</h3>
                          </div>
                          <div className="panel-body">
                              <div className="profile">
                                  <div className="profile-head">
                                      <div className="col-sm-6">
                                          <div align="center">
                                          <img className="img-rounded img-responsive" src={"../static/data/gallery_temp/1.jpg"} alt="User Picture" >
                                          </img>
                                          </div>
                                          <div className="text-center">얼굴 바꾸기</div>
                                      </div>
                                      <div className="col-sm-6">
                                          <span><h3>{userinfo[0]}</h3></span>
                                          <span><h4>{userinfo[1]}</h4></span>
                                      </div>
                                  </div>
                                  <div className="profile-body">
                                      <div className="col-sm-12">
                                          <table className="table table-bordered">
                                              <tbody>
                                                  <tr>
                                                      <th>회원 이름</th>
                                                      <td>{userinfo[0]}</td>
                                                  </tr>
                                                  <tr>
                                                      <th>등급</th>
                                                      <td>{userinfo[1]}</td>
                                                  </tr>
                                                  <tr>
                                                      <th>학번</th>
                                                      <td>{userinfo[2]}</td>
                                                  </tr>
                                                  <tr>
                                                      <th>이메일</th>
                                                      <td>{userinfo[3]}</td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* 개인정보는 본인 것만 수정 가능*/}
              <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 toppad">
                      <div className="panel-group" id="profile-edit" role="tablist"  aria-multiselectable="true">

                          <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="edit-1">
                                  <h3 className="panel-title"><a data-toggle="collapse" data-parent="#profile-edit" href="#collapse1" aria-expanded="true" aria-controls="collapse1">비밀번호변경</a></h3>
                              </div>
                              <div id="collapse1" className="panel-collapse collapse" role="tabpanel"  aria-labelledby="edit-1">
                                  <div className="panel-body">
                                      <div className="profile">
                                          <div className="profile-body">
                                              <div className="col-sm-12">
                                                  <table className="table table-bordered">
                                                      <tbody>
                                                      <tr>
                                                          <th>아이디</th>
                                                          <td>{userinfo[4]}</td>
                                                      </tr>
                                                      <tr>
                                                          <th>새 비밀번호</th>
                                                          <td><input className="form-control" type="password" id="id_password"></input></td>
                                                      </tr>
                                                      <tr>
                                                          <th>새 비밀번호 확인</th>
                                                          <td><input className="form-control" type="password" id="id_password_check"></input></td>
                                                      </tr>
                                                      </tbody>
                                                  </table>
                                                  <button onClick={ this.state.pw_fun } className="btn pull-right">
                                                      변경 완료
                                                  </button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="edit-2">
                                  <h3 className="panel-title"><a data-toggle="collapse" data-parent="#profile-edit" href="#collapse2" aria-expanded="true" aria-controls="collapse2">개인정보수정</a></h3>
                              </div>
                              <div id="collapse2" className="panel-collapse collapse" role="tabpanel"  aria-labelledby="edit-1">
                                  <div className="panel-body">
                                      <div className="profile">
                                          <div className="profile-body">
                                              <div className="col-sm-12">
                                                  <table className="table table-bordered">
                                                      <tbody>
                                                      <tr>
                                                          <th>회원 이름</th>
                                                          <td><input type="text" id="profile_name" value={userinfo[0]}></input></td>
                                                      </tr>
                                                      <tr>
                                                          <th>학번</th>
                                                          <td>{userinfo[2]}</td>
                                                      </tr>
                                                      <tr>
                                                          <th>이메일</th>
                                                          <td><input type="text" id="profile_email" value={userinfo[3]}></input></td>
                                                      </tr>
                                                      </tbody>
                                                  </table>
                                                  <button className="btn pull-left">
                                                      프로필사진 바꾸기
                                                  </button>
                                                  <button className="btn pull-right">
                                                      개인정보 변경
                                                  </button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
   } 
});

export default Identification;
