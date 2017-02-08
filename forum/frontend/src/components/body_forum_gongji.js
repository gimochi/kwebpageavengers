import React from 'react';

var BodyForumGongji = React.createClass ({
    render: function () {
        return(
            <div id="body_forum_info">      
                <div className="body_forum_info_float" id={this.props.content[0]}>
                    공-간
                </div>
                <div className="body_forum_info_float" id={this.props.content[1]}>
                    등록일자
                </div>
                <div className="body_forum_info_float" id={this.props.content[2]}>
                    마감일자
                </div>
                <div className="body_forum_info_float" id={this.props.content[3]}>
                    제목
                </div>
                <div className="body_forum_info_float" id={this.props.content[4]}>
                    작성자
                </div>
                <div className="body_forum_info_float" id={this.props.content[5]}>
                    조회수
                </div>
            </div>
        );
    }
});

export default BodyForumGongji;