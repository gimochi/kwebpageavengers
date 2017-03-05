import React from 'react';
import ReactDOM from 'react-dom';

var PostContent = React.createClass({
  render: function(){
    return(
        <div className = "postview_postcontent_container">
          <div className = "postview_postcontent_titlebox">
            <div className = "postview_postcontent_titlebox_left pull-left">
              <table>
                <tr>
                  <td>
                    <span className = "postview_postcontent_titlebox_head">제목</span>
                  </td>
                  <td>
                    <span className = "postview_postcontent_titlebox_boardname">게시판이름</span>
                  </td>
                </tr>
              </table>
            </div>
            <div className ="postview_postcontent_titlebox_right pull-right">
              <table>
                <tr>
                  <td>
                    <span>1111.01.01. 11:11</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className = "postview_postcontent_profilebox pull-left">
            <div className = "postview_postcontent_profilecard">
              <table>
                <tr>
                  <td>
                    <img className = "postview_postcontent_profilebox_photo" src = "../static/data/sujeo/silver.png"/>
                  </td>
                  <td>
                    <img className = "postview_postcontent_profilebox_sujeo" src = "../static/data/sujeo/gold.png"/>
                  </td>
                  <td>
                    <span className = "postview_postcontent_profilebox_username">윤깐식</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className = "postview_postcontent_contentbox pull-left">
              본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문<br/>
              본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
          </div>
          <div className = "postview_postcontent_controlbox">
            <div className = "postview_postcontent_controlbox_prev pull left">
              <div className = "postview_postcontent_controlbox_prev_left pull-left">
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
              <div className = "postview_postcontent_controlbox_prev_right pull-right">
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
            <div className = "postview_postcontent_controlbox_next pull-right">
              <div className = "postview_postcontent_controlbox_next_left pull-left">
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
              <div className = "postview_postcontent_controlbox_next_right pull-right">
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

export default PostContent;
