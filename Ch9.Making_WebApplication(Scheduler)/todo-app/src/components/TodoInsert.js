import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md'; // https://react-icons.netlify.com/#/icons/md 에서 원하는 아이콘 명을 {}에 넣어주면 된다.
import './TodoInsert.scss';

//항목 추가 기능: TodoInsert 컴포넌트에서 인풋 상태를 관리하고, App 컴포넌트에는 todos 배열에 새로운 객체를 추가하는 함수를 만들어야 함.
//TodoInsert value 상태 관리하기: 인풋에 입력하는 값을 관리하기 위해 useState를 사용
const TodoInsert = ({ onInsert }) => { //onInsert 함수에 현재 useState를 통해 관리하고 있는 value값을 파라미터로 넣어서 호출한다.
  const [value, setValue] = useState('');

  //useCallback: 리렌더링할 때마다 함수를 새로 만들지 않고, 한 번 함수를 만들고 재사용하는 Hook
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('') //value값 초기화

      //submit 이벤트는 브라우저에서 새로고침을 발생하므로, 이를 방지하기 위해 아래와 같은 함수를 호출한다.
      e.preventDefault(); //브라우저 새로고침 방지
    },
    [onInsert, value],
  );

  return (
    //form에서 onSubmit 함수가 호출되면 props로 받아온 onInsert 함수에 현재 value값을 파라미터로 넣어서 호출하고, 연재 value값을 초기화한다.
    //onClick 이벤트와 달리, onSubmit 이벤트는 클릭에다가 엔터까지 이벤트로 감지한다.
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;