import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';

/** Chapter 1. JSX */

/** 1-1. JSX란 무엇인가?
 * 1-1-1. JSX: 자바스크립트의 확장 문법으로서, XML과 유사함. 리액트로 프로젝트를 개발할 때 사용되나, 정식 자바스크립트 문법은 아님.
 * JSX 문법으로 작성된 코드는 브라우저에서 실행되기 전, 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환함.
 * 
 * 1-1-2. JSX의 장점
 * 1) 자바스크립트로 코딩할 때보다 훨씬 편리하고 쉬운 코드 작성. 자바스크립트로 일일이 요소들을 만드는 것은 매우 불편한 작업.
 * 2) 높은 가독성.
 * 3) 또한 div, span 등의 HTML 태그를 사용할 수 있고, 컴포넌트 역시 JSX로 HTML 태그 쓰듯이 작성할 수 있음.
*/

/** 1-2. JSX 문법 규칙
 * 1-2-1. 감싸인 요소: 컴포넌트에 여러 요소가 있다면, 반드시 부모 요소 하나로 감싸야 한다.
 * Virtual DOM에서 컴포넌트 변화를 감지해낼 때 효율적으로 비교할 수 있도록, 컴포넌트 내부는 하나의 트리 구조로 이루어져야 한다는 규칙이 있기 때문.
*/
//1)  에러 발생: 여러 개의 요소가 부모 요소 하나에 의하여 감싸져 있지 않음.
// function App() {
//   return (
//     <h1>리액트</h1>
//     <h2>잘 작동하는가?</h2>
//   );
// }
//2)  정상 작동: 여러 개의 요소를 하나의 부모 요소(div)로 감싸줌.
function App() {
  return (
    <div>
    <h1>리액트</h1>
    <h2>잘 작동하는가?</h2>
    </div>
  );
}
//3) Fragment: 리액트 v16부터 도입된 기능. div 요소 대신 사용 가능.
function App() {
  return (
    <Fragment>
      <h1>리액트</h1>
      <h2>잘 작동하는가?</h2>
    </Fragment>
  );
}
//4) Fragment의 다른 표현
function App() {
  return (
    <>
      <h1>리액트</h1>
      <h2>잘 작동하는가?</h2>
    </>
  );
}

//1-2-2. 자바스크립트 표현: JSX는 DOM 요소를 렌더링하는 기능 외에, 자바스크립트 표현식을 쓸 수 있도록 지원함.
// JSX 내부에서 코드를 { }로 감싸면 됨. 
function App() {
  return (
    <>
      <h1>이것은 {name} 프로젝트이다.</h1>
      <h2>잘 작동하는가?</h2>
    </>
  );
}

//1-2-3. If문 대신 조건부 연산자: JSX 내부의 자바스크립트 표현식에서는 if문을 사용할 수 없음. 
//조건에 따라 다른 내용을 렌더링해야할 때는 JSX 밖에서 if문을 사용해 사전에 값을 설정하거나, { } 안에 조건부 연산자(삼항 연산자)를 사용하면 됨.
function App() {
  return (
    <div>
        {name === '리액트'? (
          <h1>리액트 입니다.</h1>
        ):(
          <h2>리액트가 아닙니다.</h2>
        )}
    </div>
  );
}

//1-2-4 AND 연산자(&&)를 사용한 조건부 렌더링
//특정 조건을 만족할 때 내용을 보여주고, 그렇지 않다면 아무것도 렌더링하지 않아야 하는 상황에서는 조건부 연산자를 사용하는 것이 적절함.
//다음 두 코드는 동일하다. name값이 '리액트'면 <h1>태그 안의 내용을 보여주고, 그렇지 않다면 null을 렌더링하여 아무것도 보여주지 않음.
function App() {
  // return <div> {name === '리액트' ? <h1> 리액트 입니다.</h1> : null}</div>
  return <div> {name === '리액트' && <h1> 리액트 입니다.</h1>}</div> 
}

//리액트에서는 false를 렌더링할 때는 null과 마찬가지로 아무것도 나타나지 않기 때문에, && 연산자로 조건부 렌더링이 가능함.
//단, falsy한 값인 0은 화면에 나타난다.
// const number = 0;
// return number && <div>내용</div>

//1-2-5. undefined를 렌더링하지 않기
//아래와 같이 undefined만 반환하여 렌더링할 경우 에러 발생. 
//Error: App(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.
function App() {
  const name = undefined;
  return name;
}

//해결법: OR 연산자(||)를 사용하면, 해당 값이 undefined일 때 사용할 값을 지정할 수 있음.
function App() {
  const name = undefined;
  return name || '값이 undefined입니다.';
}

//단, 아래와 같이 JSX 내부에서 undefined를 렌더링하는 것은 괜찮음.
function App() {
  const name = undefined;
  //아래와 같이 하면 아무것도 렌더링하지 않고 백지 화면을 보여줌
  return <div>{name}</div>

  //name값이 undefined일 때 보여주고 싶은 문구가 있다면 아래처럼 설정하면 됨.
  //return <div>{ name || '리액트'}</div>
}

//1-2-6. 인라인 스타일링
//리액트에서 DOM 요소에 스타일을 적용할 때에는 객체 형태로 넣어줘야 한다.
function App() {
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16 //단위 생략 시 px로 적용됨.
  };
  return <div style = {style}>{name}</div>
}
//style 객체는 위와 같이 미리 선언할 수도 있고, 아래처럼 return에 바로 지정할 수도 있다.
function App() {
  const name = '리액트';
  return(
    <div
      style = {{
      backgroundColor: 'black',
      color: 'aqua',
      fontSize: '48px',
      fontWeight: 'bold',
      padding: 16 //단위 생략 시 px로 적용됨.
    }}
    >
      {name}
    </div>
  );
}

//1-2-7. class 대신 className
//일반 HTML과 달리, JSX에서 CSS 클래스를 사용할 때는 class가 아닌 className으로 설정해야 한다.
//먼저, ./src/App.css로 이동하여 css내용을 수정한다.
//이제, App.css를 불러온 뒤(import './App.css';) div 요소에 className값을 지정해 준다.
function App() {
  const name = '리액트';
  return <div className="react">{name}</div>;
}

//1-2-8. 태그는 꼭 닫아주어야 한다.
//HTML에서는 태그를 닫지 않아도 작동하는 경우가 있으나, JSX에서는 꼭 닫아주지 않으면 에러가 발생함(Parsing error: Unterminated JSX contents).
// function App() {
//   const name = '리액트';
//   return (
//     <>
//       <div className="react"> {name} </div>
//       <input>
//     </>
//   );
// }

//다음과 같이 input 태그를 닫아주면 정상적으로 렌더링된다.
function App() {
  const name = '리액트';
  return (
    <>
      <div className="react"> {name} </div>
      <input></input>
    </>
  );
}

//태그 사이에 별도의 내용이 들어가지 않는 경우(self-closing tag)에는 아래와 같이 태그를 선언하면서 동시에 닫을 수 있다.
function App() {
  const name = '리액트';
  return (
    <>
      <div className="react"> {name} </div>
      <input />
    </>
  );
}

export default App;

//JSX는 HTML과 비슷하지만 완전히 같지는 않다.
//코드는 XML 형식이지만 자바스크립트 객체이며, 용도와 문법이 조금씩 차이가 있다. 그러므로 위에서 다룬 문법을 잘 알아두면 좋다.