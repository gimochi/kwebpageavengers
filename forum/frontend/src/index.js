import React from 'react'
import ReactDOM from 'react-dom'
import BodyHome from './components/body_home'
import BodyForum from './components/body_forum'

const rootElement = document.getElementById('root');

function root_home(){
	ReactDOM.render(<BodyHome />, rootElement);
}	// 홈 렌더링

function root_forum_gongji(){
	ReactDOM.render(<BodyForum STATE="0" />, rootElement);
}	// 공지사항

function root_forum_jun(){
	ReactDOM.render(<BodyForum STATE="1" />, rootElement);
}	// 준스

function root_forum_jeong(){
	ReactDOM.render(<BodyForum STATE="2" />, rootElement);
}	// 정스

function root_forum_liberty(){
	ReactDOM.render(<BodyForum STATE="3" />, rootElement);
}	// 자유게시판

function root_forum_information(){
	ReactDOM.render(<BodyForum STATE="4" />, rootElement);
}	// 정보게시판


root_forum_gongji();

//이파일을 webpack을 통해서 컴파일 해서 만든 bundle.js가 script로 쓰이는 구조.	