import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const VideoList = () => {
  const [data, setData] = useState([]);
  const [ckChange, setCkChange] = useState(true);
  const navigate = useNavigate()

  const handleRedirect = (video_id) => {
    setCkChange(false);
    console.log("video_id:", video_id);
    navigate(`/video-play?video_id=${video_id}`);
    // 작은따옴표가 아니라 ``(백틱임)
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.178.232:8087/videolist');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="videoListPage"> 
      <ul style={{ display: 'flex', flexDirection: 'column' }}>
        {data.map((video) => (
          <li onClick={() => handleRedirect(video.video_id)}>
            <div style={{ flex: '0 0 150px' }}>
              <video width="150" height="100" controls>
                <source src={`http://192.168.178.232:8087/uploadvideo/${video.video_id}.mp4`} type="video/mp4" />
              </video>
            </div>
            <div style={{ marginLeft: '10px' }}>
              <span style={{ whiteSpace: 'pre' }}> &nbsp; &nbsp; &nbsp; &nbsp; </span>
              {video.video_name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default VideoList;
