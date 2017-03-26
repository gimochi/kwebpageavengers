import React from 'react';
import axios from 'axios';
export function boardTest(){

}

var BodyForumPannel = React.createClass ({
    componentDidMount(){//현재는 axios 예제참고해서 작성한거. 나중에 velopert나 다른곳 참조해서 좀더 까리하게 구현할예정.
        axios({
            method:'get',
            baseURL: 'http://localhost:3000/api',
            url:'/board/list/test'
        }).then(function (response) {
            document.getElementById('posts').innerHTML= response.data.map(function(post){
                return(
                    '<tr>'+
                    '<td>'+post.board_sq+'</td>'+
                    '<td>'+post.title+'</td>'+
                    '<td>'+post.createdAt+'</td>'+
                    '<td>'+post.user_sq+'</td>'+
                    '<td>'+post.hit+'</td>'+
                    '</tr>'
                );
            }).join('');
        })
            .catch(function (error) {
                console.log(error);
            });
        console.log("BoardTesting");
    },
    render: function () {
        return(
            <div id="body_forum_info">
                <table style={{"width":"100%"}}>
                    <thead>
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
                    </thead>
                    <tbody id="posts">
                    </tbody>
                </table>
            </div>
        );
    }
});

export default BodyForumPannel;
