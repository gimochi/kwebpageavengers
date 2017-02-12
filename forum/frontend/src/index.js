import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import BodyHome from './components/body_home';
import BodyForum from './components/body_forum';
import BodyGallery from './components/body_gallery';

const rootElement = document.getElementById('root');

var BodyForums = React.createClass({ 
	render: function(){
		return(
			<BodyForum STATE={ForumState} />
		);
	}
});

function root_home_more(){
	$('#body_home_gongji_more').click(function(){
		root_forum_gongji();
	});
	$('#body_home_jeong_more').click(function(){
		root_forum_jeong();
	});
}

function route_start(){
	ReactDOM.render(
		<Router history={browserHistory}>
			<Route path="/" components={BodyHome} />
			<Route path="forum" components={BodyForum} />
			<Route path="gallery" components={BodyGallery} />
		</Router>
		, rootElement);
	root_home_more();
}	// 홈 렌더링

function root_home(){
	browserHistory.push('/');
}

function root_forum_gongji(){
	browserHistory.push('/forum');
	$('#body_forum_gongji').click();
}	// 공지사항

function root_forum_jun(){
	browserHistory.push('/forum');
	$('#body_forum_jun').click();
}	// 준스

function root_forum_jeong(){
	browserHistory.push('/forum');
	$('#body_forum_jeong').click();
}	// 정스

function root_forum_liberty(){
	browserHistory.push('/forum');
	$('#body_forum_liberty').click();
}	// 자유게시판

function root_forum_information(){
	browserHistory.push('/forum');
	$('#body_forum_information').click();
}	// 정보게시판

function root_gallery(){
	browserHistory.push('/gallery');
}	// 사진첩

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

$('#index_gallery').click(function(){
	root_gallery();
});

route_start();

//이파일을 webpack을 통해서 컴파일 해서 만든 bundle.js가 script로 쓰이는 구조.	