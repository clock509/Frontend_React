import React, { Component } from 'react';
import './ValidationSample.css';

// ValidationSample 컴포넌트 만들고 ->  input에 ref를 달고 -> 버튼을 누를 때마다 input에 포커스를 준다.
class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false
  }

  handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    });
    this.input.focus(); //'검증하기' 버튼에 onClick 이벤트가 발생할 때 input창에 포커스를 준다.
  } //'검증하기' 버튼을 한 번 눌렀을 때, 포커스가 다시 input쪽으로 자동으로 넘어가게 한다.

  render() {
    return (
      <div>
        <input
          //콜백 함수를 통한 ref 설정: ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달함.
          ref={(ref) => this.input = ref} //ref 값을 파라미터로 전달 받으며, 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정함.
          type="password"
          value={this.state.password}
          onChange={this.handleChange} //onChange 이벤트 발생 시 handleChange 호출하여, password state를 업데이트
          className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''} //버튼 클릭 전에는 빈 문자열을, 버튼 클릭 후에는 검증 결과에 따라 success / failure 값을 설정. 그리고 이에 따라 css 효과도 달라짐.
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div> //button에서 onClick 발생시 handleButtonClick을 호출하여 clicked state를 true로 업데이트하고, validated 값을 검증 결과로 설정.
    );
  }
}

export default ValidationSample;