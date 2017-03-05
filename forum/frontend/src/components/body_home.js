import React from 'react';
import BodyHomeContainer from './body_home_container';

var BodyHome = React.createClass ({
    getInitialState() {
        return {
        };
     },
    render: function () {
        return(
            <div id="body_home_div" className="container">
                <div className="row">
                    <div className="col-md-6">
                        <BodyHomeContainer
                            num="1"
                            container_name="body_home_gongji"
                            more_name="body_home_gongji_more"
                            title="공지사항"
                        />  {/* 최근 공지 관련 */}
                    </div>
                    <div id="body_home_study_container" className="col-md-6">
                        <BodyHomeContainer
                            num="2"
                            container_name="body_home_jeong"
                            more_name="body_home_jeong_more"
                            title="정회원 스터디 자료"
                        /> {/* 최근 정스 */}
                        <BodyHomeContainer
                            num="3"
                            container_name="body_home_jun"
                            more_name="body_home_jun_more"
                            title="준회원 스터디 자료"
                        /> {/* 최근 준스 */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div id="body_home_notification">
                            <div className="body_home_title notification">
                                알림
                            </div>
                            <div className="body_home_content">
                                고려대학교 정보대학 전공소모임 KWEB입니다. 가입 및 기타 문의사항은 회장 배민근[메일]에게 문의해주세요. <br/>
                                RSS 피드를 이용하시거나, 최소한 하루에 한번 홈페이지 들어와서 게시물을 확인해주세요.
                            </div>
                        </div>
                    </div>
                </div> {/* 알림 */}


            </div>
        );
    }
});

export default BodyHome;