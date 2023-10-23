import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 1. component + props 이론
// import App from './App';

// 2. 팀원소개 실습
import App from './AppExample';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
