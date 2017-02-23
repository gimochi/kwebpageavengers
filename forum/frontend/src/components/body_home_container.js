import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

var BodyHomeContainer = React.createClass({
   getInitialState() {
    return{
     fun1:function(){
        $('#index_gongji').click();
     },
     fun2:function(){
        $('#index_jeong').click();
     },
     fun3:function(){
        $('#index_jun').click();
     }
    };
   },
   render:function () {
       var fun;
       if(Number(this.props.num) == 1){
          fun = this.state.fun1;
       }
       else if(Number(this.props.num) == 2){
          fun = this.state.fun2;
       }
       else if(Number(this.props.num) == 3){
          fun = this.state.fun3;
       }
       return(
           <div id={this.props.container_name} className="col-md-12 body_home_container">
               <div className="body_home_title">
                   {this.props.title}
                   <Link href="javascript:void(0);" onClick={fun}><span id={this.props.more_name} className="body_home_more label label-default">+more</span></Link>
               </div>
                <div className="body_home_content">
                {/* 내용이 들어가야 함. */}
                </div>
           </div>  
       );
   } 
});

export default BodyHomeContainer;
