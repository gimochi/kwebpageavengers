import React from 'react'
import ReactDOM from 'react-dom'
import BodyHome from './components/body_home'
import BodyForum from './components/body_forum'

const rootElement = document.getElementById('root');

function root_home(){
	ReactDOM.render(<BodyHome />, rootElement);
}	// 홈 렌더링

function root_forum_gongji(){
	ReactDOM.render(<BodyForum />, rootElement);
	$('#body_forum_gongji').click();
}	// 공지사항

function root_forum_jun(){
	ReactDOM.render(<BodyForum />, rootElement);
	$('#body_forum_jun').click();
}	// 준스

function root_forum_jeong(){
	ReactDOM.render(<BodyForum />, rootElement);
	$('#body_forum_jeong').click();
}	// 정스

function root_forum_liberty(){
	ReactDOM.render(<BodyForum />, rootElement);
	$('#body_forum_liberty').click();
}	// 자유게시판

function root_forum_information(){
	ReactDOM.render(<BodyForum />, rootElement);
	$('#body_forum_information').click();
}	// 정보게시판


$('#index_home').click(function(){
	root_home();
});

$('#index_gongji').click(function(){
	root_forum_gongji();
});

$('#index_jeong').click(function(){
	root_forum_jeong();
});

$('#index_jun').click(function(){
	root_forum_jun();
});

$('#index_liberty').click(function(){
	root_forum_liberty();
});

$('#index_information').click(function(){
	root_forum_information();
});

root_forum_gongji();

//이파일을 webpack을 통해서 컴파일 해서 만든 bundle.js가 script로 쓰이는 구조.	