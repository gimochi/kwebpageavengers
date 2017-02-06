import React from 'react'
import ReactDOM from 'react-dom'
import BodyHome from './components/body_home'

var STATE = 1;
// 1 for home,  2 for

const rootElement = document.getElementById('root');

if (STATE == 1) {
    ReactDOM.render(<BodyHome />, rootElement);
}


//이파일을 webpack을 통해서 컴파일 해서 만든 bundle.js가 script로 쓰이는 구조.