import React from 'react'

const MemberItem = ({name , gender , song}) => {

    return (
        <div className='item-border'>
            <p>팀원소개</p>
            <p>이름 : {name} </p>
            <p>성별 : {gender} </p>
            <p>좋아하는 노래 : {song} </p>
        </div>
    )
}

export default MemberItem