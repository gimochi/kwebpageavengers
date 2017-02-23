import React from 'react';

var BodyForumPannel = React.createClass ({
    render: function () {
        return(
            <div id="body_forum_info">
                <div className={"body_forum_info_float " + this.props.idbox[0]}>
                    공-간
                </div>
                <div className={"body_forum_info_float " + this.props.idbox[1]}>
                    {this.props.content[0]}
                </div>
                <div className={"body_forum_info_float " + this.props.idbox[2]}>
                    {this.props.content[1]}
                </div>
                <div className={"body_forum_info_float " + this.props.idbox[3]}>
                    {this.props.content[2]}
                </div>
                <div className={"body_forum_info_float " + this.props.idbox[4]}>
                    {this.props.content[3]}
                </div>
                <div className={"body_forum_info_float " + this.props.idbox[5]}>
                    {this.props.content[4]}
                </div>
                <div id="body_forum_number_container">
                    <div className="body_forum_number" id="body_forum_left_shift2">{"<<"}</div>
                    <div className="body_forum_number" id="body_forum_left_shift">{"<"}</div>
                    <div className="body_forum_number">1</div>
                    <div className="body_forum_number">2</div>
                    <div className="body_forum_number">3</div>
                    <div className="body_forum_number">4</div>
                    <div className="body_forum_number">5</div>
                    <div className="body_forum_number" id="body_forum_right_shift">{">"}</div>
                    <div className="body_forum_number" id="body_forum_right_shift2">{">>"}</div>
                </div>

            </div>
        );
    }
});

export default BodyForumPannel;
