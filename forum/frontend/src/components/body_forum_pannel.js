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
            </div>
        );
    }
});

export default BodyForumPannel;
