import React from 'react';
import { useLocation } from 'react-router-dom';

const YoutubePlay = () => {
  const location = useLocation();
  const videoId = new URLSearchParams(location.search).get('videoId');

  return (
    <div>
      <iframe
        width="448"
        height="252"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubePlay;