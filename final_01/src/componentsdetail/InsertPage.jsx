import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const InsertPage = () => {

  const [text, setText] = useState('');
  const [ckChange, setCkChange] = useState(true);
  const [videoList, setVideoList] = useState([]);
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();
  const navigate = useNavigate();

  const onChange = (input) => {
    setText(input);
    console.log("Input changed =>", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    console.log("newLayoutName =>", newLayoutName);
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed =>", button);
    if (button === "{shift}" || button === "{lock}") handleShift();
  };


  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    console.log('보낸 텍스트 :', text)

    e.preventDefault();
    try {
      // 라즈베리파이에 HTTP 요청 보내기
      const reponse = await axios.post('http://192.168.178.150:5000/execute2', { text });
      const data = reponse.data
      console.log('리턴값 :', data)

    } catch (error) {
      console.error('사진 캡처 중 오류 발생:', error);
    }

    navigate('/after-service');
  };

  return (
    <div className="insertpage">
      <div className="insertdiv">
      번호 입력 : 
        <div className="keyboardContainer">
          <input className="keyboardInput"
            type="text"
            value={text}
            onChange={handleInputChange}
            placeholder="식별 번호를 입력하세요"
            style={{ marginRight: '5px' }}
          />
          <button onClick={handleSubmit}>사진촬영</button>
        </div>
      </div>


      <div style={{ position: 'relative', left: '-500px', top:'-230px'  }}>
        <Keyboard
          keyboardRef={(r) => (keyboard.current = r)}
          layoutName={layout} // 이거 안하면 shift 처리 안된다.
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  )
}

export default InsertPage