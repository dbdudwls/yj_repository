import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ImageList = () => {
  const [data, setData] = useState([]);
  const [ckChange, setCkChange] = useState(true);
  const navigate = useNavigate()

  // 이미지 상세페이지로 이동하는 함수
  const handleRedirect = (img_id) => {
    setCkChange(false);
    console.log("img_id:", img_id);
    navigate(`/image-play?img_id=${img_id}`);
  };

  // 페이지가 렌더링 될 때  fetchData()를 실행시킴
  useEffect(() => {
    fetchData();
  }, []);

  // RESTful API를 사용하여 백엔드에서 정보를 불러옴
  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.178.232:8087/imglist'); // 백엔드의 엔드포인트 경로로 변경
      setData(response.data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div className="imgListPage">
      <ul style={{ display: 'flex', flexDirection: 'column' }}>
        {data.map((image) => (
          <li onClick={() => handleRedirect(image.img_id)}>
            <div style={{ flex: '0 0 150px' }}>
              <img src={`http://59.0.234.211:8087/uploadimg/${image.img_id}.jpg`} alt="Image" width="150" height="100" />
            </div>
            <div style={{ marginLeft: '10px' }}>
              <span style={{ whiteSpace: 'pre' }}> &nbsp; &nbsp; &nbsp; &nbsp; </span>
              {image.img_name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ImageList