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
          dbdata = [["글ㅁㄴㅇㄴㅁㅁㅇㅁㅇ1","22"],
                  ["글ㄴㅁㅇㄴㅁㅇㅁㅇㄴㅁㅇㄴㅁㅇㅁㅇㄴㅁㅇㅁㅇㄴㅁㅁㄴ2","22"],
                  ["글3ㅁㄴㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㄴㅁㅇㅇㄴㅁ","22"],
                  ["글ㅁㄴㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㅁㅇㄴㅁㅇㄴㅇㅁㅇㅇ4","22"],
                  ["글5ㅁㄴㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇ","22"],
                  ["글6ㄴㅁㅇㅁㅇㅁㅇㅁㄴㅇㄴㅁㄴㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ","22"],
                  ["글7ㄴㅁㅇㄴㅁㅇㄴㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㅁㄴㅇㄴㅁ","22"],
                  ["글8ㅁㄴㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ","22"],
                  ["글9ㄴㅁㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㄴㅁㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㅁㅇㄴㅁㅇㅁㄴㄴㅁㅇㄴㅁㅇ","22"],
                  ["글1ㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㅁㄴㅇㅁㄴㅇㅁㄴ0","22"],
                  ["글ㄴㅁㅇㄴㅁㅇㄴㅁㅇㅁㅇㄴㅁㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㄴ11","22"]];
       }
       else if(Number(this.props.num) == 2){
          fun = this.state.fun2;
          dbdata = [["글1","22"],
                  ["글2","22"],
                  ["글3","22"],
                  ["글4","22"],
                  ["글5","22"]];
       }
       else if(Number(this.props.num) == 3){
          fun = this.state.fun3;
          dbdata = [["글1","22"],
                  ["글2","22"],
                  ["글3","22"],
                  ["글4","22"],
                  ["글5","22"]];
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
                              <td>
                                <div className="body_home_content_list">
                                  <Link href="javascript:void(0);"> {data[0] + " (" + data[1] + ")"} </Link>
                                </div>
                              </td>
                              <td className="body_home_content_date">
                                2016-12-23
                              </td>
                              <td className="body_home_content_writer">
                                글쓴이
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
