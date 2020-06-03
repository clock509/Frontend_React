import React, { Component } from 'react';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

/** Ch4. ref: DOM에 이름 달기 */

/** 4-1. ref는 어떤 상황에 사용해야 하는가?
 * ref는 DOM을 꼭 직접 건드려야 할 때 사용한다. 예를 들어, input을 검증할 때 특정 id를 가진 input에 클래스를 설정해 주듯이.
*/
// class App extends Component {
//   render() {
//     return (
//       <ValidationSample />
//     );
//   }
// }

//위 ValidationSample.js에서는 state를 사용하여 필요한 기능을 구현했지만, state만으로 해결할 수 없는 기능이 있다.
//아래의 경우 DOM에 직접 접근해야 하는데, 이를 위해 ref를 사용한다.
//(1)특정 input에 포커스 주기
//(2)스크롤 박스 조작하기
//(3)Canvas 요소에 그림 그리기 등


// 4-3. 컴포넌트에 ref 달기
//ScrollBox 컴포넌트를 렌더링한 다음, ScrollBox에 ref를 달고 버튼을 만들어 누르면 ScrollBox 컴포넌트의 scrollToBottom 메서드를 실행함.
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox = ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로 이동하기</button>
      </div>
    );
  }
}

//onClick={ this.scrollBox.scrollToBottom } 으로 작성해도 틀린 것은 아니나, 컴포넌트가 처음 렌더링될 때는 this.scrollBox가 undefined이므로 에러가 발생함.
//따라서 화살표 함수로 아예 새로운 함수를 만들고, 그 내부에서 this.scrollBox.scrollToBottom 메서드를 실행하면, 버튼을 누를 때 this.scrollBox.scrollToBottom값을 읽어와서 실행하므로 에러가 발생하지 않는다.


export default App;
