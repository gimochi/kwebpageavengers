import React from 'react';
import ReactDOM from 'react-dom';
var ForumWriteForm = React.createClass({
  submit_button: function(){
    return false;
  },
  render: function (){
    return (
      <form className = "body_forum_write_form" action="" encType="multipart/form-data" method="post" onSubmit={this.submit_button}>
        <table cellPadding="10" className = "body_forum_write_table">
          <tbody>
          <tr className = "body_forum_write_row">
            <td className = "body_forum_write_label">
              게시판 선택
            </td>
            <td>
              <select className = "body_forum_write_select">
                <option value="">게시판을 선택하세요</option>
                <option value="gongji">공지사항</option>
                <option value="jeong">정회원스터디</option>
                <option value="jun">준회원스터디</option>
                <option value="liberty">자유게시판</option>
                <option value="info">정보게시판</option>
              </select>
            </td>
          </tr>
          <tr className = "body_forum_write_row">
            <td className = "body_forum_write_label">
              제목
            </td>
            <td>
              <input className = "body_forum_write_head" type = "text" placeholder = "제목을 입력하세요"/>
            </td>
          </tr>
          <tr className = "body_forum_write_row">
            <td className = "body_forum_write_label">
              본문
            </td>
            <td>
              <textarea className = "body_forum_write_content" rows = "20" placeholder = "본문을 입력하세요"></textarea>
            </td>
          </tr>
          <tr className = "body_forum_write_row">
            <td className = "body_forum_write_label">
              파일 첨부하기
            </td>
            <td>
              <input className = "body_forum_write_file" type = "file" multiple="multiple" name = "filename[]"/>
            </td>
          </tr>
          <tr className = "body_forum_write_row">
            <td className = "body_forum_write_label">
              마감 일자
            </td>
            <td>
              <input type = "date"/>
            </td>
          </tr>
          </tbody>
        </table>
        <div className = "body_forum_write_submit_container">
          <input className = "body_forum_write_submit" type="submit" value="글 등록하기" />
        </div>
      </form>
    );
  }
});

export default ForumWriteForm;
