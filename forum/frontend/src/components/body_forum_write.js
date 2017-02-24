import React from 'react';
import ReactDOM from 'react-dom';

var ForumWriteForm = React.createClass({

  render: function (){
    return (
      <div>
        <form action="" enctype="multipart/form-data" method="post">
          게시판 선택<br/>
          <select className = "body_forum_write_input" id = "body_forum_write_select">
            <option value="">게시판을 선택하세요</option>
            <option value="gongji">공지사항</option>
            <option value="jeong">정회원스터디</option>
            <option value="jun">준회원스터디</option>
            <option value="liberty">자유게시판</option>
            <option value="info">정보게시판</option>
          </select><br/>
          제목<br/>
          <input className = "body_forum_write_input" id = "body_forum_write_head" type="text" value="제목을 입력하세요"/><br/>
          파일 첨부하기<br/>
          <input className = "body_forum_write_input" id = "body_forum_write_file" type="file"/><br/>
          <input className = "body_forum_write_input" id = "body_forum_write_body" type="text" value="본문을 입력하세요"/><br/>
          마감 일자(공지사항만 해당)<br/>
          <input type="date" name="duedate"/><br/>
          <input className = "body_forum_write_input" id = "body_forum_write_submit" type="submit" value="글 등록하기"/>
        </form>
      </div>
    );
  }
});

export default ForumWriteForm;
