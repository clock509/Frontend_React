import React from 'react';
import logo from './logo.svg';
import './App.css';
import './EventPractice';
import EventPractice from './EventPractice';

/** Ch3. Event handling
 * 이벤트(Event): 사용자가 웹 브라우저에서 DOM 요소들과 상호작용하는 것. 
 * ex1. 마우스 커서를 버튼에 올렸을 때 onmouseover 이벤트를, 클릭했을 때는 onclick 이벤트를 실행한다.
 * ex2. Form 요소는 값이 바뀔 때 onchange 이벤트를 실행한다.
*/

/** 3-1. 리액트의 이벤트 시스템
 * 리액트의 이벤트 시스템은 웹 브라우저의 HTML 이벤트와 동일한 인터페이스를 갖기 때문에, 사용법이 비슷하다.
 * 
 * 3-1-1. 이벤트 사용 시 주의사항
 * (1) 이벤트 이름은 카멜 표기법으로 작성한다.
 * ex) onClick, onKeyUp
 * (2) 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다.
 * ex) 화살표 함수 문법으로 함수를 만들어 전달해도 되고, 렌더링 부분 외부에 미리 만들어서 전달해도 된다.
 * (3) DOM 요소에만 이벤트를 설정할 수 있다.
 * ex) DOM element(div, button, input, form, span 등)에는 이벤트를 설정할 수 있으나, 작집 만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 없다.
 * <MyComponent onClick={doSomething}/> 와 같이 컴포넌트에 onCLick 값을 설정한다면, MyComponent를 클릭할 때 doSomething 함수를 실행하는 것이 아니라, 그냥 이름이 onClick인 props를 MyComponent에 전달할 뿐이다.
 * 단, 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정할 수는 있다.
 * <div onClick={this.props.onClick}> {  (...)  } </div>
 * 
 * 3-1-2. 이벤트 종류
 * Clipboard, Touch, Composition, UI, Keyboard, Wheel, Focus, Media, Form, Image, Mouse, Animation, Selection, Transition 등...
 * https://facebook.github.io/react/docs/events.html 에서 더 많은 이벤트를 확인할 수 있다.
*/

/** 3-2. 이벤트 핸들링 practice
 * 순서
 * (1)컴포넌트 생성 및 불러오기
 * (2) onChange 이벤트 핸들링하기
 * (3) 임의 메서드 만들기
 * (4) input 여러 개 다루기
 * (5) onKeyPress 이벤트 핸들링하기 
*/

/** 3-2-1. 컴포넌트 생성 및 불러오기
 * ./src/EventPractice.js 파일을 만들어 새로운 컴포넌트를 생성한다.
 * 생성 후 아래와 같이 렌더링한다.
*/
const App = () => {
  return <EventPractice />;
};

/** 3-2-2. onChange 이벤트 핸들링하기
 * EventPractice.js에서 onChange 이벤트를 설정한다.
*/
const App = () => {
  return <EventPractice />;
};

/** 3-2-3. 임의 메서드 만들기
*/
const App = () => {
  return <EventPractice />;
};

/** 3-2-4. input 여러 개 다루기
*/
const App = () => {
  return <EventPractice />;
};

/** 3-2-5. onKeyPress 이벤트 핸들링
 * KeyPress: 키를 눌렀을 때 발생하는 이벤트 처리
*/
const App = () => {
  return <EventPractice />;
};

/** 3-3. 함수형 컴포넌트로 구현해 보기
 * EventPractice 컴포넌트를 함수형 컴포넌트로 구현해 보자.
 * EventPractice.js를 수정한다.
*/
const App = () => {
  return <EventPractice />;
};

export default App;
