import React from 'react'
import picSrc from './img/likePic.gif'
import Ex02LikeList from './components/Ex02LikeList'

const Ex02 = () => {

    /*
    React에서 내부 이미지 경로 지정하는 방법

     1) src폴더에서 이미지를 import하는 방법
      - import 이미지변수 from '경로'
      - <img src={이미지변수}/>
    
    2) public 폴더 내에 이미지를 저장하고 접근하기
      - public -img 폴더를 만든 후 파일을 보관
      - 이 때, 별도로 import는 필요하지 않다
        why? public 폴더는 서버와 계속해서 통신중
    */

    /*
    실습문제
    STEP 1) 하트 클릭시, 하트가 꽉찬 하트로 변경 (하트 종류는 자유)
    STEP 2) 하트 클릭시, 좋아요가 1개로 변경
    STEP 3) 좋아요 상태에서 하트를 클릭 시, 다시 원래대로
     */

    return (
        <div>
            <img src={picSrc} width='300px'></img>
            <Ex02LikeList/>
        </div>
    )
}

export default Ex02