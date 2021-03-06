import React from 'react';
import ReactDOM from 'react-dom';
import BodyForumInfo from './body_forum_info';
import { setForumState } from '../actions';
import { connect } from 'react-redux';

var BodyForum = React.createClass ({
    getInitialState() {
        return {
          gnum : 0,             /* 글번호, 몇번째 SQ에 해당하는 글을 불러올 것인가. */
          fnum : 1,             /* 페이지 수, 초기값은 1 */
          STATE : this.props.STATE,           /* STATE : 0 for 공지, 1 for 준스, 2 for 정스, 3 for 자유, 4 for 정보, 5 for 글쓰기, 6 for 글보기(임시)*/
          name : ["공지사항", "준회원 스터디", "정회원 스터디", "자유 게시판", "정보 게시판", "글쓰기", "글보기"]
        };
    },
    componentDidMount(){
      //console.log("mounted");
      window.onpopstate = function(e){ //뒤로가기가 적용되면 이전 state로 돌아간다.
        if(e.state.STATE!=undefined){
          //console.log("pop: " + e.state);
           this.setState({
             fnum : e.state.fnum,
             STATE : e.state.STATE,
             gnum : e.state.gnum
           });
          }
      }.bind(this);
      window.history.replaceState({STATE:this.props.STATE, fnum:1, gnum:this.props.GNUM},null,"/forum");
      //console.log(history.state.gnum);
    },
    state_change : function(num1,num2){
      window.history.pushState({STATE:num1, fnum:num2, gnum:this.props.GNUM},null,"/forum");
      //console.log("push: " + num1 + " " + num2);
      // 히스토리를 수동적으로 집어넣어 url변경없이도 뒤로가기가 state변경만으로 이루어질수 있는 요건을 만들어줌.
      this.setState({        /* setState는 기존 state를 변경해주고 변경부분을 render해주는 훌륭한 함수 */
          fnum:num2,
          STATE:num1,
          gnum:this.props.GNUM
      });
    },
    render: function () {
      if(this.state.STATE == 5 || this.state.STAE == 6){
        return(
            <div className="container">
                <div className="body_forum_table">
                    <div className="forum_dashboard">
                        <div id="body_forum_left_container">
                            <div id="body_forum_left_name">
                                <h2>게시판</h2>
                                <span className="body_forum_subtitle">bulletin</span>
                            </div>

                            <div> {/*react는 함수를 만들고 this에 bind시켜야하므로, this와 인자를 bind함수로 받는다.*/}
                                <hr className="body_forum_line"/>
                                <div className="body_forum_menu" id="body_forum_gongji" onClick={this.state_change.bind(this,0,1)}>
                                    공지사항 <span className="label label-success">New</span> {/*새로운 게시물이 올라오면 뜰 수 있게 이벤트*/}
                                </div>
                                <hr className="body_forum_line"/>
                                <div className="body_forum_menu" id="body_forum_jun" onClick={this.state_change.bind(this,1,1)}>
                                    준회원 스터디
                                </div>
                                <hr className="body_forum_line"/>
                                <div className="body_forum_menu" id="body_forum_jeong" onClick={this.state_change.bind(this,2,1)}>
                                    정회원 스터디
                                </div>
                                <hr className="body_forum_line"/>
                                <div className="body_forum_menu" id="body_forum_liberty" onClick={this.state_change.bind(this,3,1)}>
                                    자유 게시판  <span className="label label-success">New</span> {/*새로운 게시물이 올라오면 뜰 수 있게 이벤트*/}
                                </div>
                                <hr className="body_forum_line"/>
                                <div className="body_forum_menu" id="body_forum_information" onClick={this.state_change.bind(this,4,1)}>
                                    정보 게시판
                                </div>
                                <hr className="body_forum_line"/>
                            </div>
                            <div className="btn-center">
                                <button type="button" id="body_forum_write" className="btn btn-warning hover write-btn" onClick={this.state_change.bind(this,5,1)}>
                                    글쓰기
                                </button>
                                <button type="button" id="body_forum_postview" className="btn btn-warning hover write-btn" onClick={this.state_change.bind(this,6,1)}>
                                    글보기&댓글
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="forum_main">
                        <div id="body_forum_right_container">
                            <div id="body_forum_right_name">
                                {this.state.name[this.state.STATE]}
                            </div>
                            <BodyForumInfo STATE={this.state.STATE} />
                        </div>
                    </div>
                </div>
            </div>
        );
      }else{
          return(
              <div className="container">
                  <div className="body_forum_table">
                      <div className="forum_dashboard">
                          <div id="body_forum_left_container">

                              <div id="body_forum_left_name">
                                  <h2>게시판</h2>
                                  <span className="body_forum_subtitle">bulletin</span>
                              </div>

                              <div> {/*react는 함수를 만들고 this에 bind시켜야하므로, this와 인자를 bind함수로 받는다.*/}
                                  <hr className="body_forum_line"/>
                                  <div className="body_forum_menu" id="body_forum_gongji" onClick={this.state_change.bind(this,0,1)}>
                                      공지사항 <span className="label label-success">New</span> {/*새로운 게시물이 올라오면 뜰 수 있게 이벤트*/}
                                  </div>
                                  <hr className="body_forum_line"/>
                                  <div className="body_forum_menu" id="body_forum_jun" onClick={this.state_change.bind(this,1,1)}>
                                      준회원 스터디
                                  </div>
                                  <hr className="body_forum_line"/>
                                  <div className="body_forum_menu" id="body_forum_jeong" onClick={this.state_change.bind(this,2,1)}>
                                      정회원 스터디
                                  </div>
                                  <hr className="body_forum_line"/>
                                  <div className="body_forum_menu" id="body_forum_liberty" onClick={this.state_change.bind(this,3,1)}>
                                      자유 게시판  <span className="label label-success">New</span> {/*새로운 게시물이 올라오면 뜰 수 있게 이벤트*/}
                                  </div>
                                  <hr className="body_forum_line"/>
                                  <div className="body_forum_menu" id="body_forum_information" onClick={this.state_change.bind(this,4,1)}>
                                      정보 게시판
                                  </div>
                                  <hr className="body_forum_line"/>
                              </div>
                              <div className="btn-center">
                                  <button type="button" id="body_forum_write" className="btn btn-warning hover write-btn" onClick={this.state_change.bind(this,5,1)}>
                                      글쓰기
                                  </button>
                                  <button type="button" id="body_forum_postview" className="btn btn-warning hover write-btn" onClick={this.state_change.bind(this,6,1)}>
                                      글보기&댓글
                                  </button>
                              </div>
                          </div>
                      </div>
                      <div className="forum_main">
                          <div id="body_forum_right_container">
                              <div id="body_forum_right_name">
                                  {this.state.name[this.state.STATE]}
                              </div>
                              <BodyForumInfo STATE={this.state.STATE} />
                              <div id="body_forum_number_container">
                                  <div className="body_forum_number" id="body_forum_left_shift2">{"<<"}</div>
                                  <div className="body_forum_number" id="body_forum_left_shift">{"<"}</div>
                                  <div className="body_forum_number">1</div>
                                  <div className="body_forum_number">2</div>
                                  <div className="body_forum_number">3</div>
                                  <div className="body_forum_number">4</div>
                                  <div className="body_forum_number">5</div>
                                  <div className="body_forum_number" id="body_forum_right_shift">{">"}</div>
                                  <div className="body_forum_number" id="body_forum_right_shift2">{">>"}</div>
                              </div>
                              <div id="body_forum_button_container">
                                  <button type="button" id="body_forum_write" className="btn btn-warning hover write-btn" onClick={this.state_change.bind(this,5,1)}>
                                      글쓰기
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
        );
      }
    }
});

let mapStateToProps = (state) => {
  return{
    STATE: state.ForumState.value,
    GNUM: state.Gnum.value
  };
}

let mapDispatchToProps = (dispatch) => {
  return{
    reducer_change: (value) => dispatch(setForumState(value))
  }
}

BodyForum=connect(mapStateToProps,mapDispatchToProps)(BodyForum);

export default BodyForum;
