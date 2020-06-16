import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos }) => { //App 컴포넌트에서 받아온 todos 배열을 TodoListItem을 이루어진 배열로 변환하여 렌더링
  return (
    //map을 사용하여 컴포넌트로 변환할 때는 key props를 전달해 줘야 한다. 여기서는 id(고유값)를 활용한다.
    //todo 데이터는 통쨰로 props로 전달함. 여러 종류의 값을 전달해야 하는 경우는 객체를 통째로 전달하는 편이 나중에 성능 최적화를 할 때 편리함.
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;