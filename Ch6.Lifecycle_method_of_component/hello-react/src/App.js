import React, { Component } from 'react';
import LifeCycle from './LifeCycle';
import ErrorBoundary from './ErrorBoundary';

/** Ch6. Lifecycle method of component
 * 컴포넌트의 라이프사이클(생명주기, 수명주기): 렌더링 되기 전인 준비 과정부터 페이지에서 사라질 때까지를 가리킴.
 * 라이프사이클 메서드는 클래스형 컴포넌트에서만 사용할 수 있으며, 함수형 컴포넌트에서는 Hooks 기능이 이를 대신한다.
*/

/** 6-1. 라이프사이클 메서드의 이해
 * 라이프사이클 메서드는 총 9가지이다.
 * (1)Will 접두사가 붙은 메서드: 어떤 작업을 작동하기 전에 실행되는 메서드.
 * (2)Did 접두사가 붙은 메서드: 어떤 작업을 작동한 후에 실행되는 메서드.
 * 
 * 이 메서드들은 컴포넌트 클래스에서 덮어 써 선언함으로써 사용할 수 있음.
 * 
 * 라이프사이클은 총 3가지 카테고리로 나눈다.
 * (1)마운트: DOM이 생성되고 웹 브라우저상에 나타나는 것.
 *  - 마운트할 때 호출하는 메서드는 다음과 같다.
 *   * constructor: 컴포넌트를 새로 만들 때마다 호출되는 생성자 메서드
 *   * getDerivedFromProps: props에 있는 값을 state에 넣을 때 사용하는 메서드
 *   * render: 준비한 UI를 그려냄
 *   * componentDidMount: 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드(첫 렌더링 후)
 * (2)업데이트
 *  - 컴포넌트는 다음과 같은 경우에 업데이트한다.
 *   * props가 바뀔 때(부모 컴포넌트에서 새로운 props를 넘겨줌)
 *   * state가 바뀔 때(컴포넌트 자신이 갖고있는 state가 setState로 업데이트될 때)
 *   * 부모 컴포넌트가 리렌더링 될 때(props나 state의 변화가 없어도 부모 컴포넌트가 리렌더링되면 자식 컴포넌트 또한 자동 리렌더링됨)
 *   * this.forceUpdate로 강제로 렌더링을 발생시킬 때
 *  - 컴포넌트를 업데이트할 때 호출하는 메서드는 다음과 같다.
 *   * getDerivedFromProps: props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용. 마운트 과정에서도 호출되기도 하고, 업데이트 시작 전에 호출되기도 함.
 *   * shouldComponenUpdate: true 반환 시에는 render를 호출하고, false 반환 시에는 여기서 작업을 취소. 만약 특정 함수에서 this.forceUpdate() 함수를 호출한다면, 이 과정은 생략하고 바로 render함수를 호출함.
 *   * render: 컴포넌트 리렌더링
 *   * getSnapshotBeforeUpdate: 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드. 이 메소드 호출 후에 웹 브라우저상의 실제 DOM에 변화가 나타남.
 *   * componentDidUpdate: 컴포넌트 업데이트 작업이 끝난 후에 호출하는 메서드.
 * (3)언마운트
 *  - 컴포넌트를 DOM에서 제거하는 것. 마운트의 반대 과정임.
 *  - 컴포넌트를 언마운트할 때 호출하는 메서드는 다음과 같다.
 *   * componentWillUnmount: 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드.
*/

//랜덤으로 색상 생성
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16); //16777215를 16진법으로 표현하면 fffffff
}

class App extends Component {
  state = {
    color: '#000000'
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary><LifeCycle color={this.state.color} /></ErrorBoundary>
      </div>
    ); //버튼을 누를 떄마다 handleClick 메서드가 호출되게 이벤트 설정 //불러온 LifeCycle 컴포넌트에 color값을 props로 설정
  }    //에러 발생 시 에러 메시지를 띄우고자 하는 부분을 <ErrorBoundary> 컴포넌트로 감싸준다.
}

export default App;