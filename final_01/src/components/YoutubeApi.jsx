import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";


const YoutubeApi = () => {

    const [ckChange, setCkChange] = useState(true);
    const navigate = useNavigate()
    const [layout, setLayout] = useState("default");
    const keyboard = useRef();
    const [searchQuery, setSearchQuery] = useState('');
    const [videos, setVideos] = useState([]);
    const [prevPageToken, setPrevPageToken] = useState('');
    const [nextPageToken, setNextPageToken] = useState('');

    const onChange = (input) => {
        setSearchQuery(input);
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

    const handleRedirect = (videoId) => {
        navigate(`/youtube-play?videoId=${videoId}`);
    };

    const apiKey = 'AIzaSyDEO_ftIWAOQsXzLbIaJ6nZSex9rH3uRE4'; // 나의 YOUTUBE API KEY

    const handlePageChange = async (pageToken) => {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&q=${encodeURIComponent(
                    searchQuery
                )}&key=${apiKey}&maxResults=10&pageToken=${pageToken}`
            );

            setVideos(response.data.items); // 비디오 목록 업데이트
            setPrevPageToken(response.data.prevPageToken); // 이전 페이지 토큰 업데이트
            setNextPageToken(response.data.nextPageToken); // 다음 페이지 토큰 업데이트
        } catch (error) {
            console.log(error);
            alert('에러');
        }
    }

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };


    // 유튜브 API를 사용하여 검색결과의 리스트를 불러오는 기능

    const handleSearch = async (e) => {
        e.preventDefault();
        console.log(searchQuery);

        if (searchQuery === '') {
            alert('검색어를 입력하세요.');
            return;
        }

        try {
            const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&q=${encodeURIComponent(
                    searchQuery
                )}&key=${apiKey}&maxResults=10`
            );

            setVideos(response.data.items); // 비디오 목록 업데이트
            setPrevPageToken(response.data.prevPageToken); // 이전 페이지 토큰 업데이트
            setNextPageToken(response.data.nextPageToken); // 다음 페이지 토큰 업데이트

        } catch (error) {
            console.log(error);
            alert('에러');
        }
    };

    return (
        <div className='SearchApi'>
            <form style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="검색어를 입력하세요"
                />
                <button className='btnsearch' onClick={handleSearch}>검색</button>
            </form>

            <div className='SearchPage'>
                <div id="get_view">
                    {videos.map((video) => (
                        <p key={video.id.videoId} className="box">
                            <img
                                style={{ height: '150px', width: '200px' }}
                                src={`http://img.youtube.com/vi/${video.id.videoId}/0.jpg`}
                                alt={video.snippet.title}
                                onClick={() => handleRedirect(video.id.videoId)} // 이미지 클릭 시 handleRedirect 함수 호출
                            />
                            <br />
                            <span className='youtubetxt' onClick={() => handleRedirect(video.id.videoId)}>{video.snippet.title}</span> {/* 제목 클릭 시 handleRedirect 함수 호출 */}
                        </p>
                    ))}
                </div>

                <div id="nav_view">
                    {prevPageToken && (
                        <a href="#" onClick={() => handlePageChange(prevPageToken)}>
                            &lt; 이전페이지
                        </a>
                    )}
                    {nextPageToken && (
                        <a href="#" onClick={() => handlePageChange(nextPageToken)}>
                            다음페이지 &gt;
                        </a>
                    )}
                </div>
            </div>

            <div style={{ position: 'relative', left: '-500px', top:'-230px' }}>
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

export default YoutubeApi;