import React from 'react';
import BodyForumPannel from './body_forum_pannel';
import ForumWriteForm from './body_forum_write';



var BodyForumInfo = React.createClass ({
    render: function () {
        /* STATE : 0 for 공지, 1 for 준스, 2 for 정스, 3 for 자유, 4 for 정보 */
        if(this.props.STATE == 0){  // 공지
            var idbox = [ "body_forum_info_space", "body_forum_gongji_regdate",
                        "body_forum_gongji_duedate", "body_forum_gongji_title",
                        "body_forum_gongji_writer", "body_forum_gongji_hits"];
            var content = ["등록일자", "마감일자", "제목", "작성자", "조회수"];
            return(
                <BodyForumPannel idbox={idbox} content={content} />
                
            );
        }
        else if(this.props.STATE == 1 || this.props.STATE == 2 || this.props.STATE == 3
            || this.props.STATE == 4){
            var idbox = [ "body_forum_info_space", "body_forum_not_gongji_post_number",
                        "body_forum_not_gongji_title", "body_forum_not_gongji_regdate",
                        "body_forum_not_gongji_writer", "body_forum_not_gongji_hits" ];
            var content = ["번호", "제목", "등록일자", "작성자", "조회수"];
            return(
                <BodyForumPannel idbox={idbox} content={content} />
            );
        }
        else if(this.props.STATE == 5)  /*글쓰기를 클릭했을 경우*/
          return(
            <ForumWriteForm />  /*글쓰기 폼*/
          );
        else{
            return(
                <div>
                    Error!
                </div>
            );
        }
    }
});

export default BodyForumInfo;
