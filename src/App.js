import './App.css';
import Children from './Children';

function App() {
  const name = "김은현";
  const age = 24;

  return (
    <div>
      <h1>리액트 복습중 .. 🐳</h1> 
      <h3>{name}님 반갑습니다.</h3>
      <Children name="신동진" age="35" />
      <Children name="김은현" age="25" /> {/* 재사용 가능 */}
      <Children name="노유리" age="24" />
    </div>
  );
}

export default App;
