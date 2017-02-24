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
                  <span class = "postview_titlebox_head">제목제목</span>
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
                <td>1111.01.01. 11:11</td>
              </tr>
            </table>
          </div>
        </div>
        <div className = "body_forum_postview_profilebox">
          <div className ="body_forum_postview_profiebox" id = "body_forum_postview_profilebox">
            <table>

            </table>
          </div>
        </div>

      </div>
    );
  }
});

export default ForumPostView;
