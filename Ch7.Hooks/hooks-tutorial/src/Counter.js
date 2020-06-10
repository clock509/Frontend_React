import React, { useState, useReducer } from 'react';

/* 7-1.useState 관련 예제 */

const Counter = () => {
  const [value, setValue] = useState(0); //useState 함수의 파라미터: 상태의 기본값 //여기서는 0을 카운터의 기본값으로 설정하겠다는 의미.
  //useState 함수가 호출되면 [상태값, 상태를 설정하는 함수]를 담은 배열이 반환된다. 
  //이 함수에 파리미터를 넣어서 호출하면 전달받은 파라미터로 값이 바뀌고, 컴포넌트가 리렌더링 된다.

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

/** 7-3-1.카운터 구현하기 관련 예제*/
function reducer(state, action) {
  //action값 부여 //action.type1에 따라 다른 작업 수행(action. 뒤에 올 단어는 임의 지정 가능)
  switch (action.type1) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state; //아무것도 해당되지 않을 때는 기존 상태를 리턴
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 }); //useReducer 함수: (리듀서 함수, 해당 리듀서의 기본값)
  //state값: 현재 가리키고 있는 상태, dispatch함수: 액션을 발생시키는 함수. dispatch(action) 형태로 사용되고, 함수 안에 파라미터로 액션값을 넣으면 리듀서 함수가 호출되는 구조

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type1: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type1: 'DECREMENT' })}>-1</button>
    </div>
  );
}; //useReducer의 가장 큰 장점: 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 뺄 수 있다.

export default Counter;