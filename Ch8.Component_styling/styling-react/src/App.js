import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SassComponent from './SassComponent';
import CSSModule from './CSSModule';

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


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <SassComponent />
//       </div>
//     );
//   }
// }

/** 8-2-1. utils 함수 분리하기
 * 여러 파일에서 사용될 수 있는 Sass 변수와 믹스인은 다른 파일로 따로 분리하여 작성한 뒤 필요한 곳에서 불러와 사용할 수 있다.
 * src/styles 디렉터리를 생성하고, 그 안에 utils.scss 파일을 만든다. 그 파일에 SassComponents.scss에 작성했던 변수와 믹스인을 잘라 이동시켜본다.
 */

/** 8-2-2. sass-loader 설정 커스터마이징하기
 * 반드시 필요한 작업은 아님.
 * 프로젝트 디렉터리가 많아져 구조가 깊어진다면, import 할 때 '../../../../styles/utils'처럼 한참 상위폴더로 거슬러가야 한다는 단점이 있음.
 * 웹팩에서 Sass를 처리하는 sass-loader의 설정을 커스터마이징함으로써 해결할 수 있음. 즉 상대 경로를 입력할 필요 없이 styles 디렉터리 기준 절대 경로를 사용하여 불러올 수 있음.
 * 이를 위해서는, 숨겨진 세부 설정을 꺼내주어야 한다(create-react-app으로 만든 프로젝트는 프로젝트 구조의 복잡도를 낮추기 위해 세부 설정이 모두 숨겨져 있다).
 * 프로젝트 디렉터리에 yarn eject 명령어를 통해 세부 설정을 밖으로 꺼내는 작업을 하자.
 * 
 * create-react-app에서는 기본적으로 Git 설정이 되어있는데, yarn eject를 사용하려면 Git에 커밋되지 않은 변화가 없는 상태여야 한다.
 * VS Code 좌측의 Git UI를 사용하거나 터미널을 활용해 지금까지 한 작업을 커밋하자.
 * 
 * $ git add .
 * $ git commit -m "Commit before yarn eject"
 * 
 * 아래 작업은 프로젝트 디렉터리(Ch8.Component_styling/styling-react/) 에서 진행하자.
 * $ yarn eject
 * $ react-srcipts eject
 * 
 * 이 작업 후에는 프로젝트 디렉터리에 config라는 디렉터리가 생성되었을 것이다. 그 안에서 webpack.config.js를 열어보자.
 * Ctrl+F로 sassRegex를 검색하여 두 번째 탐색 결과의 코드 부분을 수정해 보자. 
 * use: getStyleLoaders(...) 부분의 'sass-loader'를 변경한다. //설정 변경이 완료되면 서버를 껐다가 재시작하자. 
 *      *** 만약 yarn eject 이후 서버가 제대로 시작되지 않는다면, 프로젝트 디렉터리의 node_modules 디렉터리를 삭제한 다음, yarn install을 실행한 후 npm start(혹은 yarn start)로 실행해 보자.
 * 
 * 이제, utils.scss 파일을 불러올 때 현재 수정 중인 scss 파일 경로가 어디에 위치하더라도 상대 경로를 입력할 필요가 없다.
 * SassComponent.scss에서 @import './styles/utils'; 대신 @import 'utils.scss';만 적어줘도 된다.
 * 
 * 그런데, 새 파일을 생성할 때마다 utils.scss를 포함시키는 것 마저도 귀찮다면: sass-loader의 data 옵션을 설정하면 Sass 파일을 불러올 때마다 코드 맨 윗 부분에 특정 코드를 포함시켜 준다.
 */

/** 8-2-3. node_modules에서 라이브러리 불러오기
 * yarn을 통해 설치한 라이브러리를 사용하는 가장 기본적인 방법: 상대경로를 이용해 node_modules까지 들어가서 불러오기
 * ex) @import '../../../node_modules/library/styles';
 * 그러나 스타일 파일이 깊은 디렉터리에 위치할수록, 이런 구조는 불편하다. 이때, 물결 문자(~)를 사용하면 사용이 쉽다.
 * ex) @import '~/library/styles';
 * 물결 문자를 사용하면 자동으로 ndoe_modules에서 라이브러리 디렉터리를 탐지하여 스타일을 볼러울 수 있다.
 * 
 * 두 가지 라이브러리를 설치하고 사용해 보자(include-media: 반응형 디자인을 쉽게 만들어 주는 라이브러리, open-color: 색상 팔레트)
 * $ yarn add open-color include-media
 * 
 * 그 다음 utils.scss에서 물결 표시를 사용하여 라이브러리를 불러오자.
 * 참고로, Sass 라이브러리를 불러올 때는 node_modules 내부 라이브러리 경로 안에 들어있는 scss 파일을 불러와야 한다. 
 * 보통 scss 파일 경로가 어디에 위치했는지 라이브러리의 공식 매뉴얼에서 알려주지 않을 때가 많다. 따라서 직접 경로로 들어가서 확인해야 한다.
 * */

/** 8-3. CSS module
 * CSS를 불러와서 사용할 때 클래스 이름을 [파일 이름]_[클래스 이름]_[해시 값] 형태의 고유한 값으로 만들어서, 컴포넌트 스타일 클래스 이름의 중첩 현상을 자동으로 방지해주는 기술.
 * 파일 이름을 .module.css 확장자로 저장하면 CSS Module이 자동 적용됨(v2 버전 이상부터)
 * CSSModule.module.css 라는 파일을 src 디렉터리에 생성해 보자.
 */

class App extends Component {
  render() {
    return (
      <div>
        <CSSModule />
      </div>
    );
  }
}

export default App;
