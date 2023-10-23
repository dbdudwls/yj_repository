import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 01. useState를 사용하는 이유 및 개념 (+리액트 이벤트)
// import App from './Ex01';

// 02. useState 예제 - 좋아요 실습
// import App from './Ex02'

// 03. useState 실습 - 랜덤게임
// import App from './Ex03'

// 04. useState 실습2 - 주사위게임
import App from './Ex02'


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
