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
       var dbdata;

       if(Number(this.props.num) == 1){
          fun = this.state.fun1;
          dbdata = [["글ㅁㄴㅇㄴㅁㅁㅇㅁㅇ1","1996-12-23","글쓴이"],
                  ["글ㄴㅁㅇㄴㅁㅇㅁㅇㄴㅁㅇㄴㅁㅇㅁㅇㄴㅁㅇㅁㅇㄴㅁㅁㄴ2","1996-12-23","글쓴이"],
                  ["글3ㅁㄴㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㄴㅁㅇㅇㄴㅁ","1996-12-23","글쓴이"],
                  ["글ㅁㄴㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㅁㅇㄴㅁㅇㄴㅇㅁㅇㅇ4","1996-12-23","글쓴이"],
                  ["글5ㅁㄴㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇ","1996-12-23","글쓴이"],
                  ["글6ㄴㅁㅇㅁㅇㅁㅇㅁㄴㅇㄴㅁㄴㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ","1996-12-23","글쓴이"],
                  ["글7ㄴㅁㅇㄴㅁㅇㄴㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㅁㄴㅇㄴㅁ","1996-12-23","글쓴이"],
                  ["글8ㅁㄴㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ","1996-12-23","글쓴이"],
                  ["글9ㄴㅁㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㄴㅁㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㅁㅇㄴㅁㅇㅁㄴㄴㅁㅇㄴㅁㅇ","1996-12-23","글쓴이"],
                  ["글1ㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㅁㄴㅇㅁㄴㅇㅁㄴ0","1996-12-23","글쓴이"],
                  ["글ㄴㅁㅇㄴㅁㅇㄴㅁㅇㅁㅇㄴㅁㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㄴ11","1996-12-23","글쓴이"],
                  ["글","1996-12-23","글쓴이"],
                  ["글","1996-12-23","글쓴이"],
                  ["글","1996-12-23","글쓴이"],
                  ["글","1996-12-23","글쓴이"]];
       }
       else if(Number(this.props.num) == 2){
          fun = this.state.fun2;
          dbdata = [["글1","1996-12-23","글쓴이"],
                  ["글2","1996-12-23","글쓴이"],
                  ["글3","1996-12-23","글쓴이"],
                  ["글4","1996-12-23","글쓴이"],
                  ["글5","1996-12-23","글쓴이"]];
       }
       else if(Number(this.props.num) == 3){
          fun = this.state.fun3;
          dbdata = [["글1","1996-12-23","글쓴이"],
                  ["글2","1996-12-23","글쓴이"],
                  ["글3","1996-12-23","글쓴이"],
                  ["글4","1996-12-23","글쓴이"],
                  ["글5","1996-12-23","글쓴이"]];
       }
       return(
           <div id={this.props.container_name} className="col-md-12 body_home_container">
               <div className="body_home_title">
                   {this.props.title}
                   <Link href="javascript:void(0);" onClick={fun}><span id={this.props.more_name} className="body_home_more label label-default">+more</span></Link>
               </div>

                <div className="body_home_content">

                  <table className="body_home_content_table">
                    <tbody>
                      {/* 내용이 들어가야 함. */}
                      {
                        dbdata.map((data, i) => {
                          return (

                            <tr>
                              <td className="body_home_content_list">
                                  <Link href="javascript:void(0);"> {data[0]} </Link>
                              </td>

                              <td className="body_home_content_date hidden-xs">
                                {data[1]}
                              </td>
                              <td className="body_home_content_writer">
                                {data[2]}
                              </td>
                            </tr>

                          );
                      })}
                    </tbody>
                  </table>
                </div>
           </div>  
       );
   } 
});

export default BodyHomeContainer;
