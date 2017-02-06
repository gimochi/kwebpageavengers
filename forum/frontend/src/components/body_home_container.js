import React from 'react';
import ReactDOM from 'react-dom';

var BodyHomeContainer = React.createClass({
   render:function () {
       return(
           <div id={this.props.container_name}>
               <div className="body_home_title">
                   {this.props.title}
                   <div id={this.props.more_name}>+more</div>
               </div>
           </div>  
       );
   } 
});

export default BodyHomeContainer;
