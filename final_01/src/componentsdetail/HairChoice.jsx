import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HairChoice = () => {
  const [ckChange, setCkChange] = useState(true);
  const navigate = useNavigate();

  const handleRedirect = async () => {
    setCkChange(false);

    try {
      // 라즈베리파이에 HTTP 요청 보내기
      const reponse = await axios.post('http://192.168.178.150:5000/execute');
      const data = reponse.data
      console.log('리턴값 :', data)

    } catch (error) {
      console.error('사진 캡처 중 오류 발생:', error);
    }
    navigate('/change-api');
  };

  const handleRedirect2 = async () => {
    setCkChange(false);
    navigate('/insert-page');
  };

  return (
    <div className='choice'>
      <button className='btnbefore' onClick={handleRedirect}>BEFORE</button>
      <button className='btnafter' onClick={handleRedirect2}>AFTER</button>
    </div>
  );
};

export default HairChoice;