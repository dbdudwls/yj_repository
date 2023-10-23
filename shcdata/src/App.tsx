import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import MyComponent from './main';

function App() {
  const [results, setResults] = useState({
    test: ''
  });

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.post('http://127.0.0.1:5000', {});

  //       if (!response.data) {
  //         throw new Error('API 호출 중 문제 발생');
  //       }
  //       setResults(response.data);

  //     } catch (error) {
  //       console.error('API 호출 중 오류 발생:', error);
  //     }
  //   }

  //   fetchData();
  // }, []);


  return (
    <div className="App">
      <h1>스크립트 실행 결과</h1> 
      <ul>
        <li>test.py 결과: {results.test}</li>
      </ul>
    </div>
  );
}

export default App;
