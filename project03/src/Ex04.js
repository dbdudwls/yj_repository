import React from 'react'
import Board from './components/Ex04Board'
import './style/ex04.css'

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ex04 = () => {


    // 이미지 경로 가져오기! (public 폴더 이용할 때에만)
    let imgPath = 'img/dice'

    /*
    주사위 던지기 게임을 만들어보자
        1) user가 던지기! 버튼을 클릭한다
        2) 유저의 주사위 숫자가 랜덤으로 표시된다.
        3) 컴퓨터의 주사위 숫자 또한 랜덤으로 표시된다.
        4) 유저의 주사위 숫자 - 컴퓨터의 주사위 숫자를 비교
            3-1) 내가 이겼을 경우는 나의 점수 +1
            3-2) 내가 졌을 경우는 컴퓨터의 점수 +1
        5) 먼저 5점을 낸 사람이 최종 승리
            => alert 당신의 승리입니다!, 당신의 패배입니다!
        6) RESET 버튼을 클릭 시, 모든 내용이 초기화
            - 점수, 이미지 경로, 이미지 파일 번호

        HINT!! 필요한 정보들
        - 주사위 숫자 (나, 컴퓨터)
        - 이미지 경로 (나, 컴퓨터)
        - 점수 (나, 컴퓨터)
        => Board의 props데이터로

        state명 공유
        주사위 숫자 myDice, comDice
        이미지 경로 myPath, comPath
        점수 myScore, comScore
    */

    return (
        <div className='containner'>
            <h1>주사위게임</h1>
            <div className='btn-containner'>
                <Button variant="secondary">던지기!</Button>
                <Button variant="danger">RESET</Button>
            </div>

            <div className='board-containner'>
                <Board></Board>
                <Board></Board>
            </div>

        </div>
    )
}

export default Ex04