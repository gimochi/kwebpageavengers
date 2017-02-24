import React from 'react';
import ReactDOM from 'react-dom';

var ForumPostView = React.createClass({
  render: function (){
    return (
      <div>
        <div className = "body_forum_postview_titlebox">
          <div className ="body_forum_postview_titlebox" id = "body_forum_postview_titlebox_left">
            <table>
              <tr>
                <td>
                  <span class = "postview_titlebox_head">제목</span>
                </td>
                <td>
                  <span class = "postview_titlebox_boardname">게시판이름</span>
                </td>
              </tr>
            </table>
          </div>
          <div className ="body_forum_postview_titlebox" id = "body_forum_postview_titlebox_right">
            <table>
              <tr>
                <td>
                  <span>1111.01.01. 11:11</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className = "body_forum_postview_profilebox">
          <table>
            <tr>
              <td>
                <img className = "postview_profilebox_photo" src = "C:\xampp\htdocs\projects\kwebpageavengers\forum\frontend\public\static\data\sujeo\gold.png"/>
              </td>
              <td>
                <img className = "postview_profilebox_sujeo" src = "C:\xampp\htdocs\projects\kwebpageavengers\forum\frontend\public\static\data\sujeo\silver.png"/>
              </td>
              <td>
                <span className = "postview_profilebox_username">윤깐식</span>
              </td>
            </tr>
          </table>
        </div>
        <div className = "postview_bodybox">
          본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문<br/>
          본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
        </div>
        <div className = "postview_controlbox">
          <div className = "postview_controlbox_prev">
            <div className = "postview_controlbox_prev_left">
              <table>
                <tr>
                  <td>
                    <span>△이전글</span>
                  </td>
                  <td>
                    <span>제목</span>
                  </td>
                </tr>
              </table>
            </div>
            <div className = "postview_controlbox_prev_right">
              <table>
                <tr>
                  <td>
                    <span>수저, 닉네임?</span>
                  </td>
                  <td>
                    <span>1111.01.01. 11:11</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className = "postview_controlbox_next">
            <div className = "postview_controlbox_next_left">
              <table>
                <tr>
                  <td>
                    <span>△이전글</span>
                  </td>
                  <td>
                    <span>제목</span>
                  </td>
                </tr>
              </table>
            </div>
            <div className = "postview_controlbox_next_right">
              <table>
                <tr>
                  <td>
                    <span>수저, 닉네임?</span>
                  </td>
                  <td>
                    <span>1111.01.01. 11:11</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default ForumPostView;
