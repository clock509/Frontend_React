import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SassComponent from './SassComponent';

/** Ch8. Component Styling
 * 컴포넌트 스타일링 방식 4가지
 * (1) 일반 CSS: 컴포넌터를 스타일링하는 기본적인 방식
 * (2) Sass: 자주 사용되는 CSS 전처리기 중 하나로, 확장된 CSS 문법을 사용하여 CSS 문법을 사용하여 CSS 코드를 더욱 쉽게 작성할 수 있게 해 줌.
 * (3) CSS Module: 스타일을 작성할 떄 CSS 클래스가 다른 CSS 클래스의 이름과 충돌하지 않게 파일마다 고유한 이름을 자동으로 생성해 주는 옵션.
 * (4) styled-components: 스타일을 javascript 파일에 내장시키는 방식으로 스타일을 작성함과 동시에 해당 스타일이 적용된 컴포넌트를 만들 수 있게 해 줌.
*/

/** 8-1. 가장 흔한 방식: 일반 CSS
 * 굳이 새로운 기술을 적용할 필요가 없다면 일반 CSS를 계속 사용해도 상관 없다.
 * CSS 클래스를 중복되지 않게 만드는 것이 중요하다. 
 * 여기서는 CSS 클래스의 중복 방지를 위한 방법 두 가지를 소개한다.
 * (1) 이름을 지을 때 규칙 적용하기
 * (2) CSS selector 활용하기
 */

/** 8-1-1. 이름 짓는 규칙 적용하기
 * (1)'컴포넌트 이름 - 클래스' 형태
 * 리액트 프로젝트 생성 시 자동으로 생성되는 App.css를 보면, 클래스 이름이 '컴포넌트 이름 - 클래스' 형태로 지어져 있다(ex. App-header).
 * 다른 컴포넌트에서 실수로 중복되는 클래스를 만들어 사용하는 것을 방지할 수 있음.
 * (2)BEM Naming
 * 해당 클래스가 어디에서 어떤 용도로 사용되는지 명확하게 작성하는 법(ex. card__title-primary).
 * 
*/

/** 8-1-2. CSS selector 
 * CSS 클래스가 특정 클래스 내부에 있는 경우에만 스타일을 적용할 수 있게 함.
 * App.css와 App.js의 CSS 클래스 부분을 이러한 방식으로 다시 작성해 보자.
*/

/** 8-1-2. CSS selector 관련 예제 */
//최상위 html 요소에는 컴포넌트의 이름으로 클래스 이름을 짓고(.App), 그 내부에는 소문자를 입력하거나(.logo) , header같은 태그를 이용하여 클래스 이름이 불필요한 경우 아예 생략할 수도 있음.
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header> {/* 원래는 <header className="App-header"> */}
//           <img src={logo} className="logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//             </a>
//         </header>
//       </div>
//     );
//   }
// }

/** 8-2. Sass 사용하기
 * Sass(Syntactically Awesome Style Sheets): 문법적으로 매우 멋진 스타일시트
 * - CSS 전처리기
 * - 복잡한 작업을 쉽게 해 주고, 스타일 코드의 재활용성을 높여주며, 코드의 가독성을 높여 유지 보수를 쉽게 해 줌.
 * - 두 가지 확장자를 지원: .scss, .sass  ** 두 문법은 꽤 다르다.
 * ex) .sass
 * $font-stack: Helvetica, sans-serif
 * $primary-color: #333
 * 
 * body
 *  font: 100% $font-stack
 *  color: $primary-color
 * 
 * ex) .scss
 * $font-stack: Helvetica, sans-serif;
 * $primary-color: #333;
 * 
 * body {
 *  font: 100% $font-stack;
 *  color: $primary-color;
 * }
 * 
 * - .sass 확장자는 중괄호({})와 세미콜론(;)을 사용하지 않는다.
 * - .scss 확장자는 기존 CSS를 작성하는 방식과 비교해서 문법이 크게 다르지 않다. 보통 .scss 문법이 더 자주 사용된다.
 * 
 * 여기서는 .scss 확장자를 사용하여 스타일을 작성해 보자. 우선, node-sass라는 라이브러리를 설치해 주어야 한다. 터미널에 다음을 입력하자.
 * $ yarn add node-sass
 * 
 * 설치 후, /src/SassComponent.scss 파일을 작성해 보자.
 * 그리고 이 Sass 스타일시트를 사용하는 SassComponent.js 컴포넌트 파일도 src에 만든다.
 */


class App extends Component {
  render() {
    return (
      <div>
        <SassComponent />
      </div>
    );
  }
}

/** 8-2-1. utils 함수 분리하기
 * 여러 파일에서 사용될 수 있는 Sass 변수와 믹스인은 다른 파일로 따로 분리하여 작성한 뒤 필요한 곳에서 불러와 사용할 수 있다.
 * src/styles 디렉터리를 생성하고, 그 안에 utils.scss 파일을 만든다. 그 파일에 SassComponents.scss에 작성했던 변수와 믹스인을 잘라 이동시켜본다.
 */


export default App;
