import React, { useState, useCallback, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

// Ch9. 일정 관리 웹 애플리케이션 만들기
// 9-1. 프로젝트 준비하기
// (1) Prettier 설정: 프로젝트의 최상위 디렉터리에 .prettierrc 파일을 생성한다.
// (2) index.css 수정
// (3) App 컴포넌트 초기화: 아래와 같이 초기화 한다.

const App = () => {
  const [todos, setTodos] = useState([
    //todos 배열 안에 담기는 내용: id(고유번호), text(내용), checked(완료 여부) 
    //==> 이 배열은 TodoList에 props로 전달됨. TodoList에서 이 값을 받은 후 TodoItem으로 변환하여 렌더링하도록 설정해야 한다.
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해 보기',
      checked: true
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false
    }
  ]);

  //고윳값을 사용될 id
  //ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

// 9-2. UI 구성하기
// 이 프로젝트에서 만들 컴포넌트 용도별 정리(저장 위치: /scr/components)
// (1) TodoTemplate: 화면을 가운데에 정렬시켜 주며, 앱 타이틀(일정 관리)을 보여준다. children으로 내부 JSX를 props로 받아 와서 렌더링 해 줌.
// (2) TodoInsert: 새로운 항목을 입력하고 추가할 수 있는 컴포넌트. state를 통해 인풋의 상태를 관리한다.
// (3) TodoListItem: 각 할 일 항목에 대한 정보를 보여주는 컴포넌트. todo 객체를 props로 받아와서 상태에 따라 다른 스타일의 UI를 보여준다.
// (4) TodoList: todos 배열을 props로 받아온 후, 이를 배열 내장 함수 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여준다.

export default App;
