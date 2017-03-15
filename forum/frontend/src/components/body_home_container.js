import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { setGNUM, setForumState, gf_doubleChange } from '../actions';
import { connect } from 'react-redux';

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
       var gnum; //글번호라 가정

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
                   <Link href="javascript:void(0);" onClick={fun}><span id={this.props.more_name} className="body_home_more label label-default">더보기</span></Link>
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
                                  <Link onClick={this.props.gnumchange} to="/forum"> {data[0]} </Link>
                              </td>
                              <td className="body_home_content_writer">
                                {data[2]}
                              </td>
                                <td className="body_home_content_date hidden-xs">
                                    <p className="text-right"><small>{data[1]}</small></p>
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

let mapDispatchToProps = (dispatch) => {
  return{
    gnumchange: () => dispatch(gf_doubleChange(6,123)) //2번째 변수는 글번호, 첫번째는 게시판 state
  }
}

BodyHomeContainer = connect(undefined, mapDispatchToProps)(BodyHomeContainer);

export default BodyHomeContainer;
