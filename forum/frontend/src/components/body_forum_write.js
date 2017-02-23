import React from 'react';
import ReactDOM from 'react-dom';

var ForumWriteForm = React.createClass({
  render: function (){
    return (
      <div>
        <form action="" enctype="multipart/form-data" method="post">
          게시판 선택:
          <select>
            <option value="gongji">공지사항</option>
            <option value="jeong">정회원스터디</option>
            <option value="jun">준회원스터디</option>
            <option value="liberty">자유게시판</option>
            <option value="info">정보게시판</option>
          </select><br/>
          제목:
          <input type="text" value="제목을 입력하세요"/><br/>
          파일 첨부하기:
          <input type="file"/><br/>
          <input type="text" value="본문을 입력하세요"/><br/>
          <input type="submit" value="글 등록하기"/>
        </form>
      </div>
    );
  }
});

export default ForumWriteForm;
