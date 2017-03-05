import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import Datgul from './datgul.js';
import PostContent from './body_forum_postview_postcontent.js';

var ForumPostView = React.createClass({
  render: function (){
    return (
      <table>
        <tr>
          <PostContent/>
        </tr>
        <tr>
          <Datgul/>
        </tr>
      </table>
    );
  }
});

export default ForumPostView;
