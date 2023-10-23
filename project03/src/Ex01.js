import React from 'react'
import { useState } from 'react'

const Ex01 = () => {

  /*
    React Event
    1. onClick{함수이름}
      이 때, JS처럼 ()뒤에 붙이면 바로 호출
      {()=>{함수이름()}}
    2. DOM요소에만 이벤트를 걸어줄 수 있다.
      내가 만든 컴포넌트에는 이벤트를 걸 수 없다
  */

  /*
    State
    - 컴포넌트 내부에서 관리하는 변경이 가능한 데이터
    - 변수와 다른 점? 화면에 렌더링 된다는 점
      JS에서 값이 변하는 과정을 생각해보면 마지막에 화면에 렌더링을 시켜줘야함
      => useState라는 함수를 사용해줄 것

      const [변수이름, set변수이름] = useState(초기값)
      - 변수이름
      - set변수이름 : 변수이름을 수정해야할 때 사용할 함수 이름
        num = 2 (x) => 변수만 바뀜, 화면은 그대로
        setNum(2) (o) => 화면까지 값이 같이 변화한다
      - useState : import 작업이 필요함
        import {useState} from 'react'
  */
  
  let num = 0
  const [num2, setNum2] = useState(0)

  const ck = () => {
    console.log('click!')
    num+=1
    console.log('현재 숫자는 :', num )

    setNum2(num2+1)
  }

  const ck2 = () => {
    setNum2(num2-1)
  }

  return (
    <div>
      <p>단순 변수 : {num}</p>
      <p>state : {num2}</p>
      <button onClick={ck}>+1</button>
      <button onClick={ck2}>-1</button>

      <br></br>

      <button onClick={()=>{setNum2(num2-1)}}>
        -1 (함수가 한줄이면 이런 익명함수를 사용할 수 있다)</button>
    </div>
  )
}

export default Ex01