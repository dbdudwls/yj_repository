import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoPlay = () => {
  const navigate = useNavigate();
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    // 페이지가 마운트되었을 때 video_id 값을 받아옵니다.
    const videoId = new URLSearchParams(window.location.search).get('video_id');
    setVideoId(videoId);
  }, []);

  if (videoId === null) {
    return null; // videoId가 null인 경우 아무것도 렌더링하지 않음
  }

  return (
    <div>
      <video width="448" height="252" controls>
        <source src={`http://192.168.178.232:8087/uploadvideo/${videoId}.mp4`} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlay;
