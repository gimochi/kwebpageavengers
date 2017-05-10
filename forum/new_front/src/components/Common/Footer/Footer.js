import React from 'react';

import styles from './Footer.css';
// import kakao_logo from '../../../assets/img/kakao_logo_e.png';

const Footer = () => {
    return (
      <div>
        {/*<!-- FOOTER 시작 -->*/}
      <footer className="footer text-center font-weight-bold visible-sm-block visible-md-block visible-lg-block">
        <div className="container">
          {/*<!-- 피씨버전 -->*/}
          <div className="row">
            <div className="col-sm-3">
              <img src="./static/data/kweb.png" className="kweb-logo" alt="kwebLOGO"/>
            </div>
            <div className="col-sm-9">
              <div className="contact text-center">
                <i className="fa fa-envelope contact_logo" aria-hidden="true"></i>jongwow73@gmail.com<img src="" className="kakao_logo contact_logo"/>jongwow73
                <a href="https://www.facebook.com/kwebfamily/">
                  <i className="fa fa-facebook-official contact_logo" aria-hidden="true"></i>	페이스북 @kwebfamily
                </a>
              </div>
              <p>당신이 웹마스터로 가는 길</p>
              <p className="text-muted">COPYRIGHT © 2017 KWEB All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      <footer className="container-fluid mobile-footer hidden-sm hidden-md hidden-lg">
        {/*<!-- 모바일버전 -->*/}
        <div className="row">
          <div className="col-sm-4">
            <p className="contact">
              <strong>CONTACT</strong>
              <br/>메일이나 카톡으로 문의주세요.
            </p>
          </div>
          <div className="col-sm-4">
            <p><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;jongwow73@gmail.com<img src="../static/data/kakao_logo_e.png" className="logo"/>&nbsp;&nbsp;jongwow73</p>
          </div>
          <div className="col-sm-4">
            <a href="https://www.facebook.com/kwebfamily/">
              <p><i className="fa fa-facebook-official" aria-hidden="true"></i>&nbsp;&nbsp;페이스북 @kwebfamily</p>
            </a>
          </div>
        </div>
        <div className="row">
          <p className="text-muted">COPYRIGHT © 2017 KWEB All Rights Reserved.</p>
        </div>
      </footer>
    </div>
    );
}

export default Footer;