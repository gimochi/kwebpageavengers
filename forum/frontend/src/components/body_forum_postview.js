import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import Datgul from './datgul.js';
import PostContent from './body_forum_postview_postcontent.js';

var ForumPostView = React.createClass({
  //GNUM은 글번호
  render: function (){
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <PostContent/>
            </td>
          </tr>
          <tr>
            <td>
              <Datgul/>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
});

export default ForumPostView;
