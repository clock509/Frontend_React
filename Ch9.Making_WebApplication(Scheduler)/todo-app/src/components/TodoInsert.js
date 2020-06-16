import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md'; // https://react-icons.netlify.com/#/icons/md 에서 원하는 아이콘 명을 {}에 넣어주면 된다.
import './TodoInsert.scss';

//항목 추가 기능: TodoInsert 컴포넌트에서 인풋 상태를 관리하고, App 컴포넌트에는 todos 배열에 새로운 객체를 추가하는 함수를 만들어야 함.
//TodoInsert value 상태 관리하기: 인풋에 입력하는 값을 관리하기 위해 useState를 사용
const TodoInsert = () => {
  const [value, setValue] = useState('');

  //useCallback: 리렌더링할 때마다 함수를 새로 만들지 않고, 한 번 함수를 만들고 재사용하는 Hook
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  return (
    <form className="TodoInsert">
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