import React, { Component } from 'react';

//각 라이프사이클 메서드를 실행할 때마다 콘솔 디버거에 기록.
//부모 컴포넌트에서 props로 색상을 받아 버튼을 누르면 state.number 값을 1씩 더함.
class LifeCycle extends Component {
  state = {
    number: 0,
    color: null
  };

  myRef = null; //ref 설정하는 부분

  //컴포넌트를 만들 때 처음 실행되는 메서드로, 초기 state를 설정함.
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  //props로 받아 온 값을 state에 동기화시키는 용도.
  //컴포넌트 마운트, 업데이트 시 호출하는 메서드.
  //부모에게서 받은 color값을 state에 동기화.
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  //컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행함.
  //함수를 호출하거나, 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업을 할 때 유용함.
  componentDidMount() {
    console.log('componentDidMount');
  }

  //props 또는 state를 변경했을 때 리렌더링 실시 여부를 지정하는 메서드.
  //이 메서드에서는 true, false를 반환해야 하며, 이 메서드가 없으면 기본적으로 true를 반환하고 리렌더링을 실시함. 값이 false라면 업데이트 과정은 여기서 중지됨.
  //현재 props, state로의 접근: this.props, this.state
  //다음 props, state로의 접근: nextProps, nextState  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4; //숫자의 마지막 자리가 4면 리렌더링하지 않음.
  }

  //컴포넌트를 DOM에서 제거.
  //componentDidMount에서 등록한 이벤트 타이머, 직접 생성한 DOM이 있다면 이 메서드에서 제거해야 함.
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  //DOM에 변화가 일어나기 직전의 색상 속성을 snapshot값으로 반환하여, componentDidMount에서 조회할 수 있게 함.
  //render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출되며, 업데이트 하기 직전의 값을 참고할 일이 있을 때 활용함(ex. 스크롤 바 유지)
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapShotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  //리렌더링 완료 후 사용. getSnapshotBeforeUpdate에서 반환한 snapshot값을 참조할 수 있음.
  //prevProps, prevState를 통해 컴포넌트가 이전에 가졌던 데이터에 접근할 수도 있음.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트 직전의 색상: ', snapshot);
    }
  }

  //render함수에서 에러가 발생하는 경우:
  //(1) 존재하지 않는 함수를 사용하려 할 때
  //(2) 존재하지 않는 객체의 값을 조회하려 할 때
  //렌더링할 때 에러가 발생할 경우 사용자의 브라우저에는 흰 화면만 뜰 것이므로, 에러 메시지를 띄우게 해 주어야 한다.
  render() {
    console.log('render');
    const style = {
      color: this.props.color
    };

    //{this.props.missing.value} 부분은 존재하지 않는 missing 객체의 value를 조회하려고 하는 구문이다. 이때 에러가 발생하며, ErrorBoundary 컴포넌트가 이를 감지하여 에러 메시지를 띄워준다.
    //브라우저에서 에러 메시지(TypeError: Cannot read property 'value' of undefined)를 X 버튼을 눌러 끄면, ErrorBoundary 컴포넌트에서 작성한 에러 메시지가 출력된 것을 확인할 수 있음.
    return (
      <div>
        {/* {this.props.missing.value} */}
        <h1 style={style} ref={ref => this.myRef = ref}>{this.state.number}</h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    )
  }
}

export default LifeCycle;