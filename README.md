KWEB PAGE AVENGERS
=======

forum 관련 설명


backend 는 express 이용한 API 서버

frontend 는 react 이용

frontend , backend 따로 package.json 구성되어있음

frontend 에서 리액트 등등 이용해서 만든후 test 할경우에는  frontend 폴더 안에서 npm start 를 입력하면

localhost:7777에서 확인할수있음

(모듈 없다고하면 npm install 하면 모듈 깔림)

테스트후 문제없으면 npm run build 하면  backend/public 에 bundle.js 로 리액트가 컴파일된 파일이 생성됨



backend 에서 테스트 모드로 실행하려면 backend 폴더안에서 DEBUG=backend:* npm start 을 입력하면 localhost:3000번에서 express 가 실행됨
