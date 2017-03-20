import React from 'react';

var BodyForumPannel = React.createClass ({
    render: function () {
        return(
            <div id="body_forum_info">
                <table style={{"width":"100%"}}>
                    <tbody>
                        <tr>
                        <td className={"body_forum_info_float " + this.props.idbox[1]}>
                            {this.props.content[0]}
                        </td>
                        <td className={"body_forum_info_float " + this.props.idbox[2]}>
                            {this.props.content[1]}
                        </td>
                        <td className={"body_forum_info_float " + this.props.idbox[3]}>
                            {this.props.content[2]}
                        </td>
                        <td className={"body_forum_info_float " + this.props.idbox[4]}>
                            {this.props.content[3]}
                        </td>
                        <td className={"body_forum_info_float " + this.props.idbox[5]}>
                            {this.props.content[4]}
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
});

export default BodyForumPannel;
