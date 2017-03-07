import React from 'react';
import ReactDOM from 'react-dom';
var ForumWriteForm = React.createClass({

  render: function (){
    return (
      <div className = "body_forum_write_container">
        <form action="" enctype="multipart/form-data" method="post">
          <table>
            <tr>
              <td>
                게시판 선택
              </td>
              <td>
                <select className = "body_forum_write_input" id = "body_forum_write_select">
                  <option value="">게시판을 선택하세요</option>
                  <option value="gongji">공지사항</option>
                  <option value="jeong">정회원스터디</option>
                  <option value="jun">준회원스터디</option>
                  <option value="liberty">자유게시판</option>
                  <option value="info">정보게시판</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                제목
              </td>
              <td>
                <input className = "body_forum_write_head" type = "text" placeholder = "제목을 입력하세요"/>
              </td>
            </tr>
            <tr>
              <td>
                본문
              </td>
              <td>
                <input className = "body_forum_write_content" type = "text" placeholder = "본문을 입력하세요"/>
              </td>
            </tr>
            <tr>
              <td>
                파일 첨부하기
              </td>
              <td>
                <input className = "body_forum_write_file" type = "file"/>
              </td>
            </tr>
            <tr>
              <td>
                마감 일자
              </td>
              <td>
              </td>
            </tr>
            <tr>
              <input className = "body_forum_write_input" id = "body_forum_write_submit" type="submit" value="글 등록하기"/>
            </tr>
          </table>
        </form>
      </div>
    );
  }
});

export default ForumWriteForm;
