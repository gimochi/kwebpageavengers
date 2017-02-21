import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

var Identification = React.createClass({
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

          <button>
            변경 완료
          </button>
        </div>
      );
   } 
});

export default Identification;
