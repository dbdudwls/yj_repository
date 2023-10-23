import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Youtube from './components/YoutubeList';
import MainPage from './components/MainPage';
import VideoList from './components/VideoList';
import ImageList from './components/ImageList';
import HairStyle from './components/HairStyle';
import YoutubePlay from './components/YoutubePlay';
import VideoPlay from './componentsdetail/VideoPlay';
import ImagePlay from './componentsdetail/ImagePlay';
import ChangeApi from './componentsdetail/ChangeApi';
import HairChoice from './componentsdetail/HairChoice';
import YoutubeApi from './components/YoutubeApi';
import AfterService from './componentsdetail/AfterService';
import InsertPage from './componentsdetail/InsertPage'
import SalonStyle from './componentsdetail/SalonStyle';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {

  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/img_ad2/abmirror.png', '/img_ad2/nungil.png', '/img_ad2/smart.png', '/img_ad2/todaycart.png', '/img_ad2/mung.png'];

  const imagesAd1 = [
    '/img_ad1/iu.png',
    '/img_ad1/smhrd.png',
    '/img_ad1/timo.png',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const [currentImageAd1, setCurrentImageAd1] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageAd1((prevImage) => (prevImage + 1) % imagesAd1.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // 스케일 1번만 바꿔 줄 수 있게 해주는 변수
  const [isScaled, setIsScaled] = useState(false);

  // 확대 기능
  const plus = () => {
    setIsScaled(true);
  };

  // 축소 기능
  const minus = () => {
    setIsScaled(false);
  };

  // 뒤로가기 
  const handleGoBack = () => {
    window.history.back();
  };

  //---------------- HTML시작 --------------------

  return (

    // 단일 페이지에서 다른 컴포넌트를 보여주기 위해 BrowserRouter를 사용
    <BrowserRouter>
      <div>
        {/* 확대버튼 */}
        <div className="plus-btn" >
          <button onClick={plus}>
            <img src="/img/zoomin.png" alt="zoomin" style={{ width: '64px', height: '64px' }} />
          </button>
        </div>

        {/* 축소버튼 */}
        <div className="minus-btn">
          <button onClick={minus}>
            <img src="/img/zoomout.png" alt="zoomout" style={{ width: '64px', height: '64px' }} />
          </button>
        </div>

        {/* 메인 컨테이너 */}
        <div className={`main-containner ${isScaled ? 'scaled' : ''}`}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/youtube" element={<Youtube />} />
            <Route path="/video-list" element={<VideoList />} />
            <Route path="/image-list" element={<ImageList />} />
            <Route path="/hair-style" element={<HairStyle />} />
            <Route path="/youtube-play" element={<YoutubePlay />} />
            <Route path="/video-play" element={<VideoPlay />} />
            <Route path='/image-play' element={<ImagePlay />} />
            <Route path='/change-api' element={<ChangeApi />} />
            <Route path='/hair-choice' element={<HairChoice />} />
            <Route path='/youtube-api' element={<YoutubeApi />} />
            <Route path='/after-service' element={<AfterService />} />
            <Route path='/insert-page' element={<InsertPage />} />
            <Route path='/salon-style' element={<SalonStyle />} />
          </Routes>
        </div>

        {/* 메뉴 컨테이너 */}
        {!isScaled && (
          <div className={`menu-containner`}>
            <nav>
              <ul className="menu-list">
                <li>
                  <Link to="/">
                    <img src="/img/homeicon.png" alt="homeicon" style={{ width: '65px', height: '65px' }} />
                  </Link>
                </li>
                <li>
                  <Link to="/video-list">
                    <img src="/img/videoicon.png" alt="videoicon" style={{ width: '65px', height: '65px' }} />
                  </Link>
                </li>
                <li>
                  <Link to="/image-list">
                    <img src="/img/imageicon.png" alt="imageicon" style={{ width: '65px', height: '65px' }} />
                  </Link>
                </li>
                <li>
                  <Link to="/hair-choice">
                    <img src="/img/hairicon.png" alt="hairicon" style={{ width: '65px', height: '65px' }} />
                  </Link>
                </li>
                <li>
                  <Link to="/youtube-api">
                    <img src="/img/youtubeicon.png" alt="youtubeicon" style={{ width: '65px', height: '65px' }} />
                  </Link>
                </li>
                <li onClick={handleGoBack} className='go-back'>
                  <img src="/img/backicon.png" alt="backicon" style={{ width: '64px', height: '64px' }} />
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>

      {!isScaled && (
        <div className='adver2'>
          <img src={images[currentImage]} alt='Advertisement' style={{ borderRadius: '10px' }}
          ></img>
        </div>
      )}

      {!isScaled && (
        <div className='adver3'>
          {/* <img src={imagesAd1[currentImageAd1]} style={{ borderRadius: '20px' }}/> */}

          <Carousel className="custom-carousel"  showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true}>
            {imagesAd1.map((image, index) => (
              <div key={index}>
                <img src={image} alt='Advertisement' style={{ width: '160px', height: 'auto' }} />
              </div>
            ))}
          </Carousel>
        </div>

      )}
    </BrowserRouter>
  );
}

export default App;