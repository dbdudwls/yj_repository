import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ImagePlay = () => {
  const navigate = useNavigate();
  const [imgId, setImgId] = useState(null);

  useEffect(() => {
    // 페이지가 마운트되었을 때 img_id 값을 받아옵니다.
    const imgIdParam = new URLSearchParams(window.location.search).get('img_id');
    setImgId(imgIdParam);
  }, []);

  if (imgId === null) {
    return null;
  }

  return (
    <div>
      <img src={`http://192.168.178.232:8087/uploadimg/${imgId}.jpg`} alt="Image" width="448" height="252" />
    </div>
  );
};

export default ImagePlay;
