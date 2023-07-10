import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // [변수, 함수]
  // let count = 0;

  function increase() {
    // setCount(count + 1)
    setCount((prevValue) => (prevValue + 1)) 
  }// 이전값, 배열에 무언가 추가할때 많이 썼던 형식 (이전값) => (이전값+1)라고 해도 적용됨

  function decrease() {
    // setCount(count - 1)
    setCount((prevValue) => (prevValue - 1))
  }

  return (
    <div>
      <h1>리액트 복습중 .. 🐳</h1> 
      <h3>함수 기반 Hooks 연습..🐬🦈</h3>
      <hr />
      <h3>
        현재 숫자의 값: <span style={{fontSize: "30px"}}>{count}</span>
      </h3>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
    </div>
  );
}

export default App;
