import React from 'react'

const AfterService = () => {
    return (
        <div className='afs'>
            <div className='afs_beforeimg'>
            <img
                src="http://192.168.178.150:5000/static/before.jpg?cache=false"
                alt="기본 이미지"
                style={{ width: "200px", height: "240px" }}
            />
            </div>

            <div className='afs_afterimg'>
            <img
                src="http://192.168.178.150:5000/static/after.jpg?cache=false"
                alt="기본 이미지"
                style={{ width: "200px", height: "240px" }}
            />
            </div>
        </div>
    )
}

export default AfterService