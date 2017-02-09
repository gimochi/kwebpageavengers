import React from 'react';
import BodyHomeContainer from './body_home_container';

var BodyHome = React.createClass ({
    getInitialState() {
        return {
            username : "채호경",
            grade : "금수저"
        };
     },
    render: function () {
        return(
            <div id="body_home_div" className="container">
            
                <div id="body_home_userinfo" className="row">
                    {this.state.username}님 안녕하세요! (등급:{this.state.grade})
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <BodyHomeContainer
                            container_name="body_home_gongji"
                            more_name="body_home_gongji_more"
                            title="공지사항"
                        />  {/* 최근 공지 관련 */}
                    </div>
                    <div id="body_home_study_container" className="col-md-6">
                        <BodyHomeContainer
                            container_name="body_home_jeong"
                            more_name="body_home_jeong_more"
                            title="정회원 스터디 자료"
                        /> {/* 최근 정스 */}
                        <BodyHomeContainer
                            container_name="body_home_jun"
                            more_name="body_home_jun_more"
                            title="준회원 스터디 자료"
                        /> {/* 최근 준스 */}
                    </div>
                </div>
                <div id="body_home_notification" className="row">
                    <div className="col-md-12">
                        <div className="body_home_title notification">
                            알림
                        </div>
                        <div className="body_home_content">
                            고려대학교 정보대학 전공소모임 KWEB입니다. 가입 및 기타 문의사항은 회장 배민근[메일]에게 문의해주세요. <br/>
                            RSS 피드를 이용하시거나, 최소한 하루에 한번 홈페이지 들어와서 게시물을 확인해주세요.
                        </div>
                    </div>
                </div> {/* 알림 */}

            </div>
        );
    }
});

export default BodyHome;