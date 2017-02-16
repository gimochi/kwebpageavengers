import React from 'react';
import ReactDOM from 'react-dom';

var BodyHomeContainer = React.createClass({
   render:function () {
       return(
           <div id={this.props.container_name} className="col-md-12 body_home_container">
               <div className="body_home_title">
                   {this.props.title}
                   <a href="#"><span id={this.props.more_name} className="body_home_more label label-default">+more</span></a>
               </div>
                <div className="body_home_content">
                {/* 내용이 들어가야 함. */}
                </div>
           </div>  
       );
   } 
});

export default BodyHomeContainer;
