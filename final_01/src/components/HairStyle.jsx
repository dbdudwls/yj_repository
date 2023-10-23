import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HairStyle = () => {

  const [ckChange, setCkChange] = useState(true);
  const navigate = useNavigate()

  const handleRedirect = () => {
    setCkChange(false);
    navigate('/hair-choice');
  };
  return (
    <div>HairStyle
      <br />
      <button onClick={handleRedirect}>헤어체인지로 이동</button>

    </div>
  )
}
export default HairStyle