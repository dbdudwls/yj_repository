import React from 'react'
import { useState } from 'react'

const Ex03 = () => {

    /*
    랜덤 게임을 해보자
    1) 램덤한 수를 뽑아주자 1~3
    2) 내가 누른 버튼의 숫자를 구해보자
    3) 1 숫자와 2숫자를 비교
        - 만약 두 숫자가 같다면 '정답입니다!'
        - 만약 두 숫자가 다르다면 '땡!'
    단, 각각 변화하는 수들은 바로 화면에 보여지게 한다.
    */

    const [randomNum, setRandomNum] = useState(0)
    const [selectNum, setSelectNum] = useState(0)
    const [result, setResult] = useState('')

    const btnCk = (e) => {
        console.log('btnCk')
        const seleted = parseInt(e.target.innerText)
        const random = Math.floor(Math.random() * 3)+ 1

        setRandomNum(random)
        setSelectNum(seleted)

        if(seleted===random){
            setResult('정답입니다!')
        } else {
            setResult('땡!')
        }
    }


    return (
        <div>
            <button onClick={btnCk}>1</button>
            <button onClick={btnCk}>2</button>
            <button onClick={btnCk}>3</button>

            <div>
                <p>내가 입력한 숫자 : {selectNum}</p>
                <p>랜덤 숫자 : {randomNum}</p>
                <p>{result}</p>

                {/* 아래처럼 삼항연산자로 바로 나타낼 수도 있음 */}
                {selectNum===randomNum ? <p>정답입니다</p> : <p>땡!</p>}
                 
            </div>

        </div>
    )
}

export default Ex03