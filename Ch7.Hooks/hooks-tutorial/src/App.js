import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Info from './Info';
import Average from './Average';

/** Ch7. Hooks
 * Hooks는 리액트 v16.8에 도입된 기능으로, 함수형 컴포넌트에서도 상태 관리를 할 수 있게 해 주는 useState, 
 * 렌더링 직후 작업을 설정하는 useEffect 등의 기능을 제공하여 기존의 함수형 컴포넌트의 한계를 극복하게 해 줌.
 */

/** 7-1. useState
 * 가장 기본적인 Hook.
 * 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해 줌.
 * useState를 이용한 숫자 카운터를 구현하기 위해, Counter.js에 Counter라는 컴포넌트를 만들어 보자.
 */

const App = () => {
  return (
    <Counter />
  )
}

/** 7-1-1. useState를 여러 번 사용하기
 * 하나의 useState 함수는 하나의 상태 값만 관리할 수 있음.
 * 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState를 여러 번 사용하면 됨.
 * Info.js 파일을 생성해 보자.
 */

const App = () => {
  return (
    <Info />
  )
}

/** 7-2. useEffect
 * 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook.
 * 클래스형 컴포넌트의 componentDidMount, componentDidUpdate를 합친 형태로 볼 수 있음.
 * Info 컴포넌트를 수정해 useEffect를 적용해 보자.
 */

/** 7-2-1. 마운트될 때만 실행하고 싶을 때
 * useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고, 업데이트될 때는 실행하지 않으려면, 함수의 두 번째 파라미터로 비어있는 배열을 넣어주면 된다.
 * Info 컴포넌트를 수정해 보자.
 * 컴포넌트가 처음 나타날 때만 콘솔에 문구가 나타나고, 그 이후에는 나타나지 않는다.
 */

/** 7-2-2. 특정 값이 업데이트될 때만 실행하고 싶을 때
 * useEffect의 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어 주면 된다.
 * Info 컴포넌트를 수정해 보자.
 * 배열 안에는 useState를 통해 관리하고 있는 상태를 넣어 줘도 되고, props로 전달받은 값을 넣어줘도 된다.
 */

/** 7-2-3. 뒷정리하기
 * useEffect는 렌더링되고 난 직후마다 실행되며, 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다.
 * 컴포넌트가 언마운트 되기 전이나 업데이트 되기 직전에 어떤 작업을 수행하고 싶다면, 뒷정리(cleanup) 함수를 반환해 주어야 한다.
 * Info 컴포넌트를 수정해 보자.
 */

//App 컴포넌트에서 Info 컴포넌트의 가시성을 바꿔보자.
const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => {
        setVisible(!visible);
      }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  ); //hr: 수평선 긋기 태그 
};

/** 7-3.useReducer
 * reducer: 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션값을 전달받아 새로운 상태를 반환하는 함수.
 * 리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜줘야 함.
 * 액션값은 주로 객체 형태로 이루어져 있으며, type을 지니고 있을 필요가 없다. 또한 객체가 아니라 문자열이나 숫자여도 상관 없다.
*/
const App = () => {
  return <Counter />
};


/** 7-3-1. 카운터 구현하기
 * useReducer를 사용하여 기존의 Counter 컴포넌트를 다시 구현해 보자.
*/

/** 7-3-2. 인풋 상태 관리하기
 * userReducer를 사용해 Input이 여러 개인 Info 컴포넌트에서 인풋 상태를 관리하기.
 * 클래스형 컴포넌트에서 input 태그에 name값을 할당하고 e.target.name을 참조하여 setState를 해 준 것과 유사한 방식으로 작업을 처리할 수 있음.
 * Info 컴포넌트를 수정해 보자.
*/
const App = () => {
  return <Info />
};


/** 7-4.useMemo
 * 함수형 컴포넌트 내부에서 발생한 연산을 최적화해줌.
 * Average.js 작성: 리스트에 숫자를 추가하면 추가된 숫자들의 평균을 보여주는 함수형 컴포넌트 예시
*/
const App = () => {
  return <Average />
}

/** 7-5.useCallback
 * 렌더링 성능을 최적화해야 하는 상황에서 사용.
 * 이 hook을 사용하면 이벤트 핸들러 함수를 필요할 때만 생성할 수 있음.
 * 
 * Avarage 컴포넌트에서 선언한 onChange와 onInsert 함수는 컴포넌트가 리렌더링될 때마다 새로 생성된다.
 * 그냥 써도 무방하다만, 컴포넌트의 렌더링이 자주 발생하거나 컴포넌트 개수가 많은 경우 이 부분을 최적화해주는 것이 좋다.
 * useCallback으로 Average 컴포넌트를 최적화해 보자.
*/

/** 7-6.useRef
 * useRef: 함수형 컴포넌트에서 ref를 쉽게 사용하는 방법.
 * useRef로 만든 객체 안의 current 값이 실제 엘리먼트를 가리키게 됨.
 * Average 컴포넌트를 수정해, '등록' 버튼을 눌렀을 때 포커스가 인풋 쪽으로 넘어가도록 해 보자.
*/

/** 7-6-1.로컬 변수 사용하기
 * 로컬 변수: 렌더링과 상관없이 바뀔 수 있는 값.
 * 이 컴포넌트 로컬 변수를 사용해야 할 때도 useRef를 활용할 수 있다.
 * 클래스형 컴포넌트에서 로컬 변수를 사용해야 할 경우 아래와 같이 작성할 수 있다.
*/
/*
import React, {Component} from 'react';

class MyComponent extends Component {
  id = 1
  setId = (n) => {
    this.id = n;
  }
  printId = () => {
    console.log(this.id);
  }
  render() {
    return (
      <div>
        MyComponent
      </div>
    );
  }
}
*/

//함수형 컴포넌트로는 아래와 같이 작성할 수 있다.
/*
import React, {useRef} from 'react';

const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  } //ref 안의 값이 바뀌어도 컴포넌트가 렌더링되지 않는다. 즉 렌더링과 관련되지 않은 값을 관리할 때만 이런 식으로 코드를 작성할 수 있다.
  const printId = () => {
    console.log(id.current);
  }
  return (
    <div>
      refSample
    </div>
  );
};
*/

/** 7-7.커스텀 hooks 만들기
 * 여러 컴포넌트에서 비슷한 기능을 공유할 경우, 이를 나만의 hook으로 작성하여 로직을 재사용할 수 있음.
 * 기존에 Info 컴포넌트에서 여러 개의 인풋을 관리하기 위해 useReducer로 작성했던 로직을 useInputs라는 hook으로 따로 분리해 보자.
 * useInputs.js 라는 파일을 만들어 보자.
*/
const App = () => {
  return <Info />
}

/** 7-8.다른 Hooks
 * 다른 개발자가 만든 Hooks도 라이브러리로 설치하여 사용할 수 있다. 아래 사이트를 참고하자.
 * https://nikgraf.github.io/react-hooks/
 * https://github.com/rehooks/awesome-react-hooks
*/

export default App;
