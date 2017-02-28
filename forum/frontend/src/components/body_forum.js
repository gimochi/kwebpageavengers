import React from 'react';
import ReactDOM from 'react-dom';
import BodyForumInfo from './body_forum_info';


var BodyForum = React.createClass ({
    getInitialState() {
        return {
          fnum : 1,             /* 페이지 수, 초기값은 1 */
          STATE : 0,           /* STATE : 0 for 공지, 1 for 준스, 2 for 정스, 3 for 자유, 4 for 정보, 5 for 글쓰기, 6 for 글보기(임시)*/
          name : ["공지사항", "준회원 스터디", "정회원 스터디", "자유 게시판", "정보 게시판", "글쓰기", "글보기"]
        };
     },
    state_change : function(num){
        this.setState({        /* setState는 기존 state를 변경해주고 변경부분을 render해주는 훌륭한 함수 */
            fnum:1,
            STATE:num
        });
    },
    render: function () {
        return(
            <div className="container-fluid">
                <div id="body_forum_left_container">

                    <div id="body_forum_left_name">
                        게시판
                    </div>

                    <div> {/*react는 함수를 만들고 this에 bind시켜야하므로, this와 인자를 bind함수로 받는다.*/}
                        <div className="body_forum_menu" id="body_forum_gongji" onClick={this.state_change.bind(this,0)}>
                            공지사항 <span className="label label-success">New</span>
                        </div>
                        <div className="body_forum_menu" id="body_forum_jun" onClick={this.state_change.bind(this,1)}>
                            준회원 스터디
                        </div>
                        <div className="body_forum_menu" id="body_forum_jeong" onClick={this.state_change.bind(this,2)}>
                            정회원 스터디
                        </div>
                        <div className="body_forum_menu" id="body_forum_liberty" onClick={this.state_change.bind(this,3)}>
                            자유 게시판
                        </div>
                        <div className="body_forum_menu" id="body_forum_information" onClick={this.state_change.bind(this,4)}>
                            정보 게시판
                        </div>
                    </div>
                    <div className="btn-center">
                      <button type="button" id="body_forum_write" className="btn btn-warning hover write-btn" onClick={this.state_change.bind(this,5)}>
                        글쓰기
                      </button>
                      <button type="button" id="body_forum_postview" className="btn btn-warning hover write-btn" onClick={this.state_change.bind(this,6)}>
                        글보기&댓글
                      </button>
                    </div>
                 </div>

                <div id="body_forum_right_container">
                    <div id="body_forum_right_name">
                        {this.state.name[this.state.STATE]}
                    </div>

                     <BodyForumInfo STATE={this.state.STATE} />     {/*글 정보 목록*/}



                     {/*글 반복문 추가 부분*/}


                   {/*검색기능 추가??*/}
                </div>

                <div id="body_forum_bottom_space">
                    {/* absolute가 자리를 차지하지 못하기에 넣어준 div */}
                </div>

          </div>
        );
    }
});

export default BodyForum;
