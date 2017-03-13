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
     },
     pid_fun:function(){
      var regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
      var strValue = $('#profile_email').val();
      //입력을 안했으면
      if(strValue.length == 0){
        alert("입력을 하세요!");
      }
      //이메일 형식에 맞지않으면
      else if (!strValue.match(regExp)){
        alert("이메일 형식이 맞지 않습니다!");
      }
      else {
        /* 개인정보 변경 코드 */
        alert("변경에 성공했습니다!");
        history.go(0);
      }
     },
     pic_fun:function(){
        $('#file_input').click(); //파일 정보 불러오기 클릭

        /* 사진을 업로드해서 디비에 보내는 과정.... 어떻게 할지 모르겟음! */

        //alert($('#file_input').val());
     }
    };
  },

   render: function () {

      var userinfo = ["채호경", "은수저 (정회원)", "2015410019", "ckdwhzjarhk@naver.com", "ckdwhzjarhk"];
      return(
          <div className="container">
              {/* 보이는 프로필 */}
              <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 toppad">
                      <div className="panel panel-default">
                          <div className="panel-heading profile-heading" role="tab">
                              <h2 className="panel-title text-center">프로필</h2>
                          </div>
                          <div className="panel-body">
                              <div className="profile">
                                  <div className="profile-head">
                                      <div className="col-sm-6">
                                          <div align="center">
                                          <img className="img-rounded img-responsive" src={"../static/data/gallery_temp/1.jpg"} alt="User Picture" >
                                          </img>
                                          </div>
                                      </div>
                
                                      <div className="col-sm-6">
                                          <span><h3>{userinfo[0]}</h3></span>
                                          <span><h4>{userinfo[1]}</h4></span>
                                      </div>
                                  </div>

                                  <div className="profile-body">
                                      <div className="col-sm-12">
                                          <div style={{"marginTop":"15px"}}></div>
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
              {/* 안보이는 프로필, 개인정보는 본인 것만 수정 가능*/}
              <div className="row">
                  {/* 프로필 아코디언 */}
                  <div className="col-xs-12 col-sm-12 col-md-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 toppad">
                      <div className="panel-group" id="profile-edit" role="tablist"  aria-multiselectable="true">
                          {/* 비밀번호 변경 */}
                          <div className="panel panel-default">
                              <div className="panel-heading profile-heading" role="tab" id="edit-1">
                                  <h2 className="panel-title text-center"><a data-toggle="collapse" data-parent="#profile-edit" href="#collapse1" aria-expanded="true" aria-controls="collapse1">비밀번호변경</a></h2>
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
                                                          <td><input className="form-control" type="text" value={userinfo[4]} readOnly></input></td>
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
                          {/* 개인정보 변경 */}
                          <div className="panel panel-default">
                              <div className="panel-heading profile-heading" role="tab" id="edit-2">
                                  <h2 className="panel-title text-center"><a data-toggle="collapse" data-parent="#profile-edit" href="#collapse2" aria-expanded="true" aria-controls="collapse2">개인정보변경</a></h2>
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
                                                          <td><input className="form-control" type="text" id="profile_name" value={userinfo[0]} readOnly></input></td>
                                                      </tr>
                                                      <tr>
                                                          <th>학번</th>
                                                          <td>{userinfo[2]}</td>
                                                      </tr>
                                                      <tr>
                                                          <th>이메일</th>
                                                          <td><input placeholder={userinfo[3]} className="form-control" type="text" id="profile_email"></input></td>
                                                      </tr>
                                                      </tbody>
                                                  </table>
                                                  <input type="file" id="file_input" style={{"height":"0px", "display":"none"}} />
                                                  <button onClick={ this.state.pic_fun } className="btn pull-left">
                                                      프사 바꾸기
                                                  </button>
                                                  <button onClick={ this.state.pid_fun } className="btn pull-right">
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
