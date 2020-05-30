import React, { Component, useState } from 'react';


//App.js의 3-2-1. 컴포넌트 생성 관련 예제
class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
      </div>
    );
  }
}

//App.js의 3-2-2. onChange 이벤트 핸들링하기 관련 예제
//3-2-2-1. onChange 이벤트 설정
//input element를 렌더링하고 해당 element에 onChange 이벤트를 설정.
class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무 것이나 입력해 보세요."
          onChange={
            (e) => {
              console.log(e);
            } //크롬 개발자 도구를 열고 input에 글자를 입력하면, 이벤트 객체가 콘솔에 나타남.
            //e 객체는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체.
            //SyntheticEvent는 이벤트가 끝나고 나면 이벤트가 초기화됨. 다시 말해, e 객체 내부의 모든 값이 비워지므로 정보를 참조할 수 없음.
            //만약 비동기적으로 이벤트 객체를 참조하고자 한다면, e.persist() 함수를 호출해야 한다.
            //예를 들어, onChange 이벤트가 발생할 때, 앞으로 변할 인풋 값인 e.target.value를 콘솔에 기록하려면 다음과 같이 수정하면 된다.
            // onChange = {
            //   (e) => {
            //     console.log(e.target.value);
            //   }
            // }
          }
        />
      </div>
    );
  }
}

//3-2-2-2. state에 input 담기
//생성자 메서드 constructor에서 state 초깃값을 설정하고, 이벤트 함수 내부에서 this.setstate 메서드를 호출하여 state 업데이트하기.
//그런 후 input의 value값을 state에 있는 값으로 설정하기.

class EventPractice extends Component {
  state = {
    message: ''
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요."
          value={this.state.message}
          onChange={
            (e) => {
              this.setState({
                message: e.target.value
              })
            }
          }
        />
      </div>
    )
  }
}
//input에 입력했을 때 오류가 발생하지 않는다면 state에 텍스트를 잘 담은 것임.

//3-2-2-3. 버튼을 누를 때 comment 값을 공백으로 설정하기
//클릭 이벤트가 발생하면 현재 comment 값을 alert box로 띄운 후, comment 값을 공백으로 설정함.
class EventPractice extends Component {
  state = {
    message: ''
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요."
          value={this.state.message}
          onChange={
            (e) => {
              this.setState({
                message: e.target.value
              })
            }
          }
        />
        <button onClick={
          () => {
            alert(this.state.message);
            this.setState({
              message: ''
            });
          }
        }>확인</button>
      </div>
    )
  }
}

/** App.js의 3-2-3. 임의 메서드 만들기 관련 예제
 * 이벤트를 사용할 때, 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다.
 * 함수를 전달하는 방식은 두 가지이다.
 * (1) 렌더링을 하는 동시에 함수를 만들어 전달
 * (2) 함수를 미리 준비하여 전달
*/
//onChange와 onClick에 전달한 함수를 render함수 외부에 따로 준비하여 전달하는 코드 예시.

//3-2-3-1. 기본 방식
class EventPractice extends Component {
  state = {
    message: ''
  }

  constructor(props) { //함수-함수 바인딩 작업하는 부분
    super(props);      //임의 메서드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서는, 메서드를 this와 바인딩하는 작업이 필요하다.
    this.handleChange = this.handleChange.bind(this); //메서드 이름은 마음대로 정해도 좋다. 단, 여기서는 알아보기 쉽게 handle____로 형식을 정한다.
    this.handleClick = this.handleClick.bind(this);
  } //바인딩이 제대로 되지 않으면, this가 undefined를 가리키게 된다.

  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

//3-2-3-2. Property initializer syntax를 사용한 메서드 작성
//메서드 바인딩은 생성자 메서드에서 하는 것이 정석이나, 새 메서드를 만들 때마다 constructor도 수정해야 하므로 불편하게 느껴질 때도 있다.
//바벨의 transform-class-properties 문법을 사용해 화살표 함수 형태로 메서드를 정의하면 더 간편하게 메서드 바인딩을 할 수 있다.
class EventPractice extends Component {
  state = {
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    });
  }

  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

/** App.js의 3-2-4. input 여러 개 다루기 관련 예제
 * 이벤트를 사용할 때, 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다.
 * 함수를 전달하는 방식은 두 가지이다.
 * (1) 렌더링을 하는 동시에 함수를 만들어 전달
 * (2) 함수를 미리 준비하여 전달
*/
//3-2-4-1.
//input이 여러 개일 때 값을 state에 넣는 방법: event 객체를 활용하기(해당 인풋의 name인 e.target.name 값을 사용)
//render 함수에서 name값이 username인 input을 렌더링 해 주고, state 쪽에도 username이라른 값 추가해 주는 예시.
class EventPractice extends Component {
  state = {
    username: '',
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value //객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용됨
    });
  }

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무 것이나 입력해 보세요."
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    )
  }
}

/** App.js의 3-2-5. onKeyPress 이벤트 핸들링 관련 예제
 * comment 인풋에서 엔터 키를 눌렀을 때 handleClick 메서드를 호출하도록 코드 작성.
*/
class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') { //e.Key (x) 대소문자 구분 잘 할 것.
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요."
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    )
  }
}

/** App.js의 3-3. 함수형 컴포넌트로 구현해 보기 관련 예제 */
const EventPractice = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = e => setUsername(e.target.value); //여기서는 input이 2개 뿐이므로, onChange 관련 함수 두 개를 따로 만들었으나, 인풋 개수가 많아진다면 e.target.name을 활용하는 것이 좋을 수도 있다.
  const onChangeMessage = e => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ': ' + message);
    setUsername('');
    setMessage('');
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  }

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  )
}

//useState를 통해 사용하는 상태에 문자열이 아닌 객체를 넣어 보자.
const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: ''
  });
  const { username, message } = form;
  const onChange = e => {
    const nextForm = {
      ...form, //...(spread) 연산자는 '객체의 사본'. 기존의 form 내용을 이 자리에 복사
      [e.target.name]: e.target.value //원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: ''
    });
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  }

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
//e.target.name 값을 활용하려면, 위와 같이 useState를 쓸 때 인풋 값들이 들어있는 form 객체를 사용해 주면 된다.

export default EventPractice;