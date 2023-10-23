import './App.css';

function App() {

  // JSX : 하나의 파일 안에 HTML문법과 JS문법을 동시에 작성할 수 있는 확장자
  // => document객체에 별도로 접근할 필요가 없음
  // => 가독성이 좋고 기능별로 분류하기 쉽다

  // JSX 규칙
  // 1. 여러 요소가 있다면 반드시 하나의 부모요소로 감싸주어야 한다. (div가 아니어도 됨)

  // 2. 표현식 사용 가능
  //   JS문법을 사용 => return문 안에서
  //   단, {}안에서 if문 사용불가
  //   - 조건이 하나일 때 && 연산자를 사용한다, {}안에다가 사용
  //   - 조건이 2개일때는? 삼항연산자
  //     조건 ? 실행문1 : 실행문2
  //   - 조거이 3개 이상일 때는 조건문을 표현식이 아닌, return위쪽에서 사용

  // 3. 기존 HTML 문법과 다른 점들 정리
  //  a. class 대신 className을 사용
  //  b. html태그(DOM요소)를 사용할 때는 무조건 소문자로 시작! (대문자는 따로 쓸 일이 있음)
  //  c. content가 없더라도 끝태그를 생략할 수 없다

  // 4. 스타일링 적용
  //  a. css안에 작성하기
  //   - import 되어있는 css에 삽입

  //  b. 객체 형태로 작성하기
  //   - 객체 형태로 원하는 스타일을 작성
  //   - 원하는 태그의 style 속성으로 객체 입력
  //  단, 객체안에서는 camelCase로 작성
  //  예를 들어 css 에서는 background-color라고 작성한다면,
  //  객체내에서는 backgroundColor라고 작성해야함

  const txtstyle = {
    color : 'blue',
    fontWeight : '900'
  }

  let name = '선영표'
  let state = 'open'

  // 3. 조건문이 3개 이상일 때
  let text = ""
  if (name === '강태우') {
    text = 'DB'
  }else if(name === '선영표'){
    text = 'front-end'
  }else{
    text = 'back-end'
  }

  // index.js에 있는 React.StrictMode 켜놓으면 코드가 2번씩 실행됨
  console.log('현재 방문한 사람은 ', name)

  return (
    <div className='container'>
      <p style={txtstyle}>유영진의 리액트 홈페이지에 오신 것을 환영합니다.</p>
      {/* 조건이 하나일 때 */}
      {state === 'open' && <p>{name}님 반갑습니다!</p>}

      {/* 조건이 2개일 때 */}
      {name === '강예진' ? <p>환영합니다!</p> : <p>죄송합니다. 이용하실 수 없습니다.</p>}

      {/* 조건이 3개일 때 */}
      {text}
    </div>
  );
}

export default App;
