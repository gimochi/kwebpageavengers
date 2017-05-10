import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.css'

const Header = () => {
    return (
      <div>
          <header>
			<div className="container">
				<div className="row text-center">
					<NavLink to="/" className="top-logo" id="index_home">KWEB</NavLink>
				</div>
			</div>
		</header>
		<nav className="navbar navbar-default navbar-top" data-spy="affix" data-offset-top="90">
			<div className="container">
				<div className="navbar-header">
					{/*<!-- 모바일 사용자를 위한 토글메뉴 시작-->*/}
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<i className="fa fa-bars" aria-hidden="true"></i>
					</button>
					{/*<!-- 모바일 사용자를 위한 토글메뉴 끝-->*/}
					{/*<!-- 케이웹 로고 혹은 글자 -->*/}
					<a className="navbar-brand" id="index_userinfo" href="javascript:void(0);">로그인 해주세요.</a>
				</div>
				{/*<!-- 네비바 리스트 시작 -->*/}
				<div className="collapse navbar-collapse">
					{/*<!-- 사용자 정보 시작 -->*/}
					<div className="nav navbar-nav navbar-left">
						<p className="user-info">no information</p>
					</div>
					{/*<!-- 사용자 정보 끝 -->*/}
					{/*<!-- 게시판 이동 링크들 시작-->*/}
					<ul className="nav navbar-nav navbar-right">
						{/*<li><a href="#Wiki">Wiki</a></li>*/}
						<li><NavLink to="/album" id="index_gallery">사진첩</NavLink></li>
						<li className="dropdown"><a href="#board1" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">게시판<span className="caret"></span></a>
							<ul className="dropdown-menu" role="menu">
								<li><NavLink to="/board">공지사항</NavLink></li>
								<li><NavLink to="/board" id="index_jun">준회원스터디</NavLink></li>
								<li><NavLink to="/board" id="index_jeong">정회원스터디</NavLink></li>
								<li className="divider"></li>
								<li><NavLink to="/board" id="index_liberty">자유게시판</NavLink></li>
								<li><NavLink to="/board" id="index_information">정보게시판</NavLink></li>
							</ul>
						</li>
						{/*<li className="dropdown"><a href="#board2" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">비주류게시판<span className="caret"></span></a>
							<ul className="dropdown-menu" role="menu">
								<li><a href="javascript:void(0);">운터디</a></li>
								<li><a href="javascript:void(0);">용구비어</a></li>
								<li><a href="javascript:void(0);">오버워치</a></li>
								<li><a href="javascript:void(0);">혼밥매칭러</a></li>
							</ul>
						</li>*/}
						<li><NavLink to="/claim">건의사항</NavLink></li>
						{/*<li><a href="#etc">기타</a></li>*/}
					</ul>
					{/*<!-- 게시판 이동 링크들 끝-->*/}
				</div>
				{/*<!-- 네비바 리스트 끝 -->*/}
			</div>
		</nav>
		{/*<!-- Navbar 끝 -->*/}
     </div>
    );
}

export default Header;