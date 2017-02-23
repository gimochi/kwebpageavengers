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
        <div id="id_container">
          <img src="" id="id_img">
          </img>
          <br />
          <button>
            프로필 사진 변경
          </button>
          <table id="id_table">
            <tbody>
              <tr>
                <th>
                  회원 이름
                </th>
                <td>
                  {userinfo[0]}
                </td>
              </tr>
              <tr>
                <th>
                  등급
                </th>
                <td>
                  {userinfo[1]}
                </td>
              </tr>
              <tr>
                <th>
                  학번
                </th>
                <td>
                  {userinfo[2]}
                </td>
              </tr>
              <tr>
                <th>
                  이메일
                </th>
                <td>
                  {userinfo[3]}
                </td>
              </tr>
              <tr>
                <th>
                  아이디
                </th>
                <td>
                  {userinfo[4]}
                </td>
              </tr>
              <tr>
                <th>
                  새 비밀번호
                </th>
                <td>
                  <input type="password" id="id_password"></input>
                </td>
              </tr>
              <tr>
                <th>
                  새 비밀번호 확인
                </th>
                <td>
                  <input type="password" id="id_password_check"></input>
                </td>
              </tr>
            </tbody>
          </table>

          <button onClick={ this.state.pw_fun }>
            변경 완료
          </button>
        </div>
      );
   } 
});

export default Identification;
