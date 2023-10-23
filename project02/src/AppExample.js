
import './App.css';

// rafce + Enter
import React from 'react'
import MemberItem from './components/MemberBox'

const AppExample = () => {


    /*
    팀원 소개 - (이름 , 성별 , 좋아하는 노래)
    단, component와 props의 개념을 이용할 것
    - MemberBox라는 컴포넌트를 생성하기
    혹시 너무 빨리 끝내버린 사람은 디자인 하고 있기!
    */

    // let woman = '여성'
    // let man = '남성'

    let {man, woman} = {
        man : '남성',
        woman : '여성'
    }

    return (
        <div>
            <MemberItem name='유영진' gender={man} song='블루밍'></MemberItem>
            <MemberItem name='이연규' gender={man} song='Ditto'></MemberItem>
            <MemberItem name='송진주' gender={woman} song='신호등'></MemberItem>
            <MemberItem name='허재욱' gender={man} song='스파이시'></MemberItem>
        </div>
    )
}

export default AppExample