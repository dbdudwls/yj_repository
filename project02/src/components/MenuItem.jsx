

const MenuItem = ({ name, menu, price }) => {

    /*
        상위 컴포넌트에서 보낸 값을 하위 컴포넌트에서 받는 방법
        함수의 형태이기 때문에, 값은 매개변수를 통해서 받는다
        Case 1. props => props.name
        Case 2. {name} => name
        
        객체 비구조화 할당
         - 객체 안의 속성만 꺼내서 마치 변수인 것처럼 사용
        ex) let props = {name='선영표' , gender='w'}
            => let {name, gender} = {name='선영표', gender='w'}
        그 뒤로부터는 객체 안의 속성값을 변수처럼 사용
    */

    console.log('App.js에서 넘어온 값은', name)

    return (
        <div className="item-border">
            <p>{name}</p>
            <p>{price}원</p>
            <h1>{menu}</h1>
        </div >
    )
}

export default MenuItem