import React from 'react'
import { useState } from 'react'



const Ex02LikeList = () => {

    const [num, setNum] = useState(0)
    const [heart, setHeart] = useState('🖤')

    const ck = () => {
        if (num === 0) {
            setNum(num + 1)
            setHeart('❤️')
        } else {
            setNum(num - 1)
            setHeart('🖤')
        }
    }

    return (
        <div>
            <span onClick={ck}>{heart}</span> {" "}
            <span>좋아요 {num}개</span>
        </div>
    )
}

export default Ex02LikeList