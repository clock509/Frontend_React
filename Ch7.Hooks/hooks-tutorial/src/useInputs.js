/** 7-7.커스텀 hooks 만들기 관련 예제 */
import { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = e => {
    dispatch(e.target);
  };
  return [state, onChange];
} //이 hook을 Info 컴포넌트에서 사용해 보자.