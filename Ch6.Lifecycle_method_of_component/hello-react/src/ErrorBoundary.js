import React, { Component } from 'react';


class ErrorBoundary extends Component {
  state = {
    error: false
  };

  //컴포넌트 렌더링 중 에러가 발생했을 때 오류 UI를 보여줄 수 있게 해 주는 메서드.
  //error: 어떤 에러인지 보여줌. //info: 에러가 발생한 코드 위치에 대한 정보를 보여줌.
  //단, 컴포넌트 자신에게 발생하는 에러는 잡아낼 수 없고, 자신의 this.props.children으로 전달되는 컴포넌트에서 발생하는 에러만 잡을 수 있음.
  componentDidCatch(error, info) {   //에러 발생 시 componentDidCatch 메서드가 호출되며, this.state.error값을 true로 업데이트.
    this.setState({
      error: true
    });
    console.log({ error, info });
  }
  //render함수에서는 error 상태값이 true이면 에러 메시지를 출력함.
  render() {
    if (this.state.error) return <div>에러가 발생했습니다.</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;