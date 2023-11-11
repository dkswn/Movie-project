import './App.css';
import {useCallback, useState} from "react";
import Box1 from "./Components/Box1";
import Box2 from "./Components/Box2";
import Box3 from "./Components/Box3";

function App() {
  console.log("App 컴포넌트가 렌더링 되었습니다!");
  const [count , setCount] = useState(0);

  const OnPlusButtonClickHandler = () => {
    setCount(count + 1);
  }
  const OnMinusButtonClickHandler = () => {
    setCount(count - 1);
  }

  // count를 초기화 해주는 함수
  const initCount = useCallback(()=> {
    console.log(`${count}에서 0으로 변경되었습니다.`);
    setCount(0); // Count는 초기값이 0이고 set하고 초기값이 0이다 다만 불변성으로 따질때 함수도 오브젝트로 인식
                        // 하기 때문에 새로운 객체가 생성된 상태에서 props로 Box1에 넘겨 줬다고 생각하기 때문에
                        // usemeomo를 해서 리렌더링을 막았다하더라도 props로 인하여 리렌더링 된다.
  },[count])  /// 이 state가 변경되는 시점에 현재상태를 유지해주기 위해 count를 넣어줌
  return <div style={{
    margin: "20px",
    padding: "20px",
    justifyContent:"center"
  }}>
      <h3>카운트 예제입니다.</h3>
    <p>현재 카운트 : {count}</p>
    <button onClick={OnPlusButtonClickHandler}>+</button>
    <button onClick={OnMinusButtonClickHandler}>-</button>
    <div style={{
      display:"flex",
      marginTop: "10px",
    }}>
      <Box1 initCount={initCount}/>
      <Box2/>
      <Box3/>
    </div>
  </div>;

}

export default App;
