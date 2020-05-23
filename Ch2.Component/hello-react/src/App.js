import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Say from './Say';
import MyComponent from './MyComponent'; //실습에 사용될 MyComponent.js의 MyComponent 컴포넌트 호출

/** Chapter 2. Component */

/** 2-1. 클래스형 컴포넌트 */

// 컴포넌트의 선언 방법: 클래스형, 함수형
// (1)클래스형 컴포넌트 
// state 기능 및 라이프사이클 기능을 사용할 수 있고, 임의 메서드를 정할 수 있음.
// render 함수가 꼭 있어야 하고, 그 안에서 보여 주어야 할 JSX를 리턴해야 함.
class App extends Component {
  render() {
    const name = 'react';
    return <div className="react"> {name} </div>;
  }
}
// (2)함수형 컴포넌트
function App() {
  const name = 'React';
  return <div className="react"> {name} </div>;
}

/** 함수형 컴포넌트의 장, 단점
 * 장점(1): 클래스형보다 선언하기가 편함.
 * 장점(2): 메모리 자원 소모가 클래스형보다 덜 함.
 * 장점(3): 프로젝트 빌드 후 배포할 때도 결과물의 파일 크기가 클래스형보다 더 작음.
 * 
 * 단점(1): state, lifecycle API의 사용이 불가능하다(이는 Hoooks 기능 도입으로 해결됨).
 * 
 * 그럼에도 불구하고 클래스형 컴포넌트를 익혀야 하는 것은, 아직 완전히 사라진 방식이 아니기 때문이다.
*/

/** 2-2. 컴포넌트 생성하기 */
// 컴포넌트 생성 절차: 파일 만들기(~~.js) => 코드 작성하기 => 모듈 내보내기 및 불러오기
// 2-2-1. src 디렉터리에 MyComponent.js 파일 생성 후, 안에 코드 작성.
// 2-2-2. 모듈 내보내기(MyComponent.js 맨 마지막에 'export default MyComponent;') & 모듈 불러오기(App.js 맨 위에 'import MyCompontnt from './MyComponent';')
const App = () => {
  return <MyComponent />;
}; //MyComponent.js에서 export한 MyComponent의 내용을 받아와 브라우저 화면에 출력해 준다.

/** 2-3. props */
//props: properties의 줄임말로서, 컴포넌트 속성을 설정할 때 사용함.
//props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트(지금은 App 컴포넌트가 부모 컴포넌트)에서 설정할 수 있음.

//2-3-1. JSX 내부에서 props 렌더링
//MyComponent 컴포넌트를 수정해, 해당 컴포넌트에서 name이라는 props를 렌더링하도록 설정하기.

//2-3-2. JSX 내부에서 props 렌더링
//App 컴포넌트에서 MyComponent의 props 값을 지정한다.
const App = () => {
  return <MyComponent name="React" />;
}

//2-3-3. props 기본값 설정: defaultProps
//props 값을 따로 지정하지 않았을 때 보여줄 기본값을 설정하는 명령어.
//App 컴포넌트는 아래와 같이 쓰고, MyComponent에 defaultProps 관련 코드를 추가한다.
const App = () => {
  return <MyComponent />;
}

//2-3-4. 태그 사이의 내용을 보여주는 children
//children: 컴포넌트 태그 사이의 내용을 보여주는 props
const App = () => {
  return <MyComponent>리액트</MyComponent>;
  //return <MyComponent name = 'Awesome React'>리액트</MyComponent>; //defaultProps값을 쓰지 않을 때...
}; //'리액트'라는 문자열을 MyComponent 내부에서 보여주려면, props.children 값을 보여주어야 한다. MyComponent 컴포넌트를 수정해 보자.

//2-3-5. 비구조화 할당 문법을 통해 props 내부 값 추출하기
//비구조화 할당(Destructing assignment): 객체에서 값을 추출하는 것. 함수의 파라미터 부분에서도 사용할 수 있음.
//props값을 조회할 때마다 props.name, props.children 같은 키워드를 앞에 붙여주는데, ES6의 비구조화 할당 문법을 사용하면 props 내부 값을 바로 추출할 수 있다.
//MyComponent를 수정해 보자. 2-3-4에서 쓴 것보다 더 간결해진다.

//2-3-6. protoTypes를 통한 props 검증
//protoTypes: 컴포넌트의 필수 props 지정, 또는 props의 타입(type) 지정 시 사용.
const App = () => {
  //return <MyComponent name={3}>리액트</MyComponent>; //MyComponent에서 name값을 string으로 정해야 한다고 설정했는데 이처럼 int형으로 설정하면, 타입 불일치 에러가 뜬다(크롬 개발자 도구 확인)
  return <MyComponent name={'React'}>리액트</MyComponent>;
};

//2-3-6-1. isRequired를 사용하여 필수 propTypes 설정하기
//propTypes를 지정하지 않았을 떄 크롬 개발자 도구에서 경고 메시지를 띄워주려면: propTypes를 지정할 때 뒤에 isRequired를 붙여준다.
//MyComponent 컴포넌트를 수정해보자.
//MyComponent 컴포넌트를 수정한 후, 아래 코드처럼 favoriteNumbers값을 전달하지 않으면 크롬 개발자 도구에서 'isRequired 요소가 undefined이다'라는 경고가 뜬다.
const App = () => {
  return (
    <MyComponent name = {"React"} favoriteNumbers = {1}>리액트</MyComponent>
  )
}

//2-3-6-2. PropTypes 종류
/** PropTypes에서는 여러 가지 종류를 설정할 수 있다(https://github.com/facebook/prop-types)
 * (1)array: 배열
 * (2)arrayOf(다른 PropType): 특정 PropType으로 이루어진 배열. (ex. arrayOf(PropTypes.number): 숫자로 이루어진 배열)
 * (3)bool: true / false값
 * (4)func: 함수
 * (5)number: 숫지
 * (6)object: 객체
 * (7)string: 문자열
 * (8)symbol: ES6의 symbol
 * (9)node: 렌더링할 수 있는 모든 것(숫자, 문자열, JSX코드, children 등)
 * (10)instanceOf(클래스): 특정 클래스의 인스턴스(ex: instanceOf(MyClass))
 * (11)oneOf(['dog', 'cat']): 주어진 배열 요소 중 값 하나
 * (12)oneOfType([React.PropTypes.string, PropTypes.number]): 주어진 배열 안의 종류 중 하나
 * (13)objectOf(React.PropTypes.number): 객체의 모든 키 값이 인자로 주어진 PropType인 객체
 * (14)shape({ name: PropTypes.string, num: PropTypes.number }): 주어진 스키마를 가진 객체
 * (15)any: 아무 종류
 */

//2-3-7. 클래스형 컴포넌트에서 props 사용하기
//클래스형 컴포넌트에서 props를 사용할 때는, render함수에서 this.props를 조회하면 된다.
//defaultProps와 propTypes는 똑같은 방식으로 설정하면 된다.
// MyComponent를 클래스형 컴포넌트로 변환해 보자.

/** 2-4. state */
/** state란, 컴포넌트 내부에서 바뀔 수 있는 값을 의미함.
 * props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며, 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있다. props의 변경은 부모 컴포넌트에서 해야 한다.
 * ex. MyComponent의 name값을 바꾸려면, App 컴포넌트에서 바꿔주어야 한다.
 * state의 두 종류
 * (1) state(클래스형 컴포넌트)
 * (2) useState 함수를 통해 사용하는 state(함수형 컴포넌트)
*/

//2-4-1. 클래스형 컴포넌트의 state
// ./src/Counter.js 파일을 생성하여, 새로운 컴포넌트를 생성하라.
// Counter 컴포넌트 생성이 완료되었으면, App에서 불러와 렌더링한다.
const App = () => {
  return <Counter />
}

//2-4-1-1. ~ 2-4-1-4. this.SetState 관련 내용: Counter.js 참조

//2-4-2. 함수형 컴포넌트에서 useState 사용하기
//리액트 v16.8부터는 useState를 통해 함수형 컴포넌트에서도 state를 사용할 수 있게 되었음.
//useState는 Hooks의 한 종류임.

//2-4-2-1. 배열 비구조화 할당
//객체 비구조화 할당처럼, 배열 안에 있는 값을 쉽게 추출할 수 있는 문법.
//const array = [1, 2];
//const one = array[0] //1
//const two = array[1] //2
//이 배열 예시를 배열 비구조화 할당으로 표현하면 다음과 같다.
//const array = [1, 2];
//const [one, two] = array;

//2-4-2-2. useState 사용하기
//./src/Say.js 라는 파일을 만들고, 새 컴포넌트인 Say를 만들어 보자.
//Say 컴포넌트를 아래와 같이 렌더링해 보자.
const App = () => {
  return <Say />;
}

//2-4-2-3. 한 컴포넌트에서 useState 여러 번 사용하기
//한 컴포넌트에서 useState를 여러 번 사용하며 다양한 상태를 관리할 수 있다.
//Say 컴포넌트를 수정해 보자.
const App = () => {
  return <Say />;
}

/** 2-5. state를 사용할 때 주의 사항
 * 클래스형, 함수형 컴포넌트 모두 state를 사용할 때 주의사항이 있다.
 * state값을 바꿔야 할 때는 setState 혹은 useState를 통해 전달받은 setter 함수를 사용해야 한다.
*/
//예를 들어, 아래 코드는 잘못된 코드이다.
//(1)클래스형 컴포넌트에서의 예
// this.state.number = this.state.number + 1;
// this.state.array = this.array.push(2);
// this.state.object.value = 5;

//(2)함수형 컴포넌트에서의 예
// const[object, setObject] = useState({ a: 1, b: 1});
// object.b = 2;

//배열이나 객체를 업데이트하려면: 배열 또는 객체의 사본을 만들고 그 사본에 값을 업데이트 한 후, 그 사본의 상태럴 seState 또는 setter 함수를 통해 업데이트한다.
//(1)객체의 예시
// const object = {a:1, b:2, c:3};
// const nextObject = { ...object, b:2}
//(2)배열의 예시
// const array = [
//   {id: 1, value: true},
//   {id: 2, value: true},
//   {id: 3, value: false}
// ];
// let nextArray = array.concat({ id: 4 }); //새 항목 추가
// nextArray.filter(item => item.id !==2); //id가 2인 항목 제거(id가 2가 아닌 항목들만 남김)
// nextArray.map(item => (item.id === 1 ? { ...item, value: false} : item)); //id가 1이면 항목의 value를 false로 설정, 그렇지 않으면 원 상태 그대로 둠.

// 객체의 사본을 만들 때는 ...(spread 연산자)를 사용하여 처리.
// 배열의 사본을 만들 때는 배열의 내장 함수를 활용.

export default App;
