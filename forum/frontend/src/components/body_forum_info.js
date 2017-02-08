import React from 'react';
import BodyForumGongji from './body_forum_gongji'

var BodyForumInfo = React.createClass ({
    render: function () {
        /* STATE : 0 for 공지, 1 for 준스, 2 for 정스, 3 for 자유, 4 for 정보 */
        if(this.props.STATE == 0){  // 공지
            var idbox = [ "body_forum_info_space", "body_forum_gongji_regdate", "body_forum_gongji_duedate", 
                        "body_forum_gongji_title",  "body_forum_gongji_writer", "body_forum_gongji_hits" ];
            return(
                <BodyForumGongji content={idbox} />
            );
        }
        else if(this.props.STATE == 1){

            return(
                <div>
                    1
                </div>
            );
        }
        else if(this.props.STATE == 2){

            return(
                <div>
                    2
                </div> 
            );
        }
        else if(this.props.STATE == 3){

            return(
                <div>
                    3
                </div>
            );
        }
        else if(this.props.STATE == 4){

            return(
                <div>
                    4
                </div>
            );
        }
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