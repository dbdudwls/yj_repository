import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 1. JSX의 특징 이론
// import App from './App';

// 2. JSX 실습
import App from './AppExample'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> 이거 해놓으면 2개씩 뜸
    <App />
  // </React.StrictMode>
);

reportWebVitals();
