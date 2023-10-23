import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

// 사용되지 않는 페이지

const YoutubeList = () => {
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
    e.preventDefault();
    try {
      const response = await axios.get('http://59.0.234.211:8087/videos', {
        params: {
          query: text
        }
      });
      setVideoList(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  const handleRedirect = (videoSrc) => {
    setCkChange(false);
    navigate('/youtube-play', { state: { videoSrc } });
  };

  return (
    <div>
      <div className="keyboardContainer">
        <input className="keyboardInput"
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="글자를 입력하세요"
          style={{ marginRight: '5px' }}
        />
        <button onClick={handleSubmit}>검색</button>
      </div>

      <ul>
        {videoList.map((video) => (
          <li onClick={() => handleRedirect(video.src)}>
            <div>ID: {video.member_id}</div>
            <div>제목: {video.cut_dy }</div>
            <div>소스: {video.pic_path}</div>
          </li>
        ))}
      </ul>


      <div style={{ position: 'relative', left: '-500px' }}>
        <Keyboard
          keyboardRef={(r) => (keyboard.current = r)}
          layoutName={layout} // 이거 안하면 shift 처리 안된다.
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  );
};

export default YoutubeList;