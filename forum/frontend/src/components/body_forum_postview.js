import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import Datgul from './datgul.js';

var ForumPostView = React.createClass({
  render: function (){
    return (
      <div>
        <div className = "body_forum_postview_container">
          <div className = "body_forum_postview_titlebox pull-left">
            <div className ="body_forum_postview_titlebox pull-left" id = "body_forum_postview_titlebox_left">
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
            <div className ="body_forum_postview_titlebox pull-right" id = "body_forum_postview_titlebox_right">
              <table>
                <tr>
                  <td>
                    <span>1111.01.01. 11:11</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className = "body_forum_postview_profilebox pull-left">
            <table>
              <tr>
                <td>
                  <img className = "postview_profilebox_photo" src = "../static/data/sujeo/gold.png"/>
                </td>
                <td>
                  <img className = "postview_profilebox_sujeo" src = "../static/data/sujeo/silver.png"/>
                </td>
                <td>
                  <span className = "postview_profilebox_username">윤깐식</span>
                </td>
              </tr>
            </table>
          </div>
          <div className = "body_forum_postview_bodybox pull-left">
            본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문<br/>
            본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
          </div>
          <div className = "body_forum_postview_controlbox">
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
                      <span>▽다음글</span>
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
        <Datgul/>
      </div>
    );
  }
});

export default ForumPostView;
