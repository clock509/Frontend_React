import React, { Component } from 'react';
import IterationSample from './IterationSample';
import logo from './logo.svg';
import './App.css';

/* Ch5. 컴포넌트 반복 */
//웹 애플리케이션을 만들다 보면, IterationSample.js처럼 반복되는 코드를 작성할 때가 있다. IterationSample.js로 이동해 보자.
//IterationSample.js에서 봤듯이, 반복적인 내용을 효율적으로 보여주고 관리하는 방법이 필요하다.

/* 5-1. 자바스크립트 배열의 map() 함수 
 * map 함수는 자바스크립트 배열 객체의 내장함수.
 * map 함수는 파라미터로 전달된 함수를 사용해서 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 그 결과로 새로운 배열을 생성함.
*/

/* 5-1-1. 문법
 * arr.map(callback, [thisArg])
 * 함수의 파라미터를 정리하면 다음과 같다.
 * (1) callback: 새로운 배열의 요소를 생성하는 함수로, 파라미터는 다음 세 가지이다.
 *   - currentValue: 현재 처리하고 있는 요소
 *   - index: 현재 처리하고 있는 요소의 index값
 *   - array: 현재 처리하고 있는 원본 배열
 * (2) thisArg(Optional): callback 함수 내부에서 사용할 this 레퍼런스
*/

/* 5-1-2. 예제
 * 배열 [1, 2, 3, 4, 5]의 각 요소를 제곱해서 새로운 배열 생성하기 
 * *------------------------------------------------------*
 * var numbers = [1, 2, 3, 4, 5];
 * 
 * var processed = numbers.map(function(num){
 *    return num * num;
 * });
 * 
 * console.log(processed); //[1, 4, 9, 16, 25]
 * *------------------------------------------------------*
 * 이처럼 map 함수는 기존 배열로 새로운 배열을 만드는 역할을 한다.
 * 참고로, ES6 문법으로 위 코드를 작성해보면 다음과 같다.
 * *------------------------------------------------------
 * const numbers = [1, 2, 3, 4, 5];
 * const result = numbers.map(num => num * num);
 * console.log(result);
 * *------------------------------------------------------* 
 * */

/* 5-2. 데이터 배열을 컴포넌트 배열로 변환하기
 * IterationSample 컴포넌트를 수정해 보자.
 */

//이렇게 수정해도 렌더링이 되긴 하나, 개발자 도구에서는 아래와 같은 에러를 보인다.
//Warning: Each child in a list should have a unique "key" prop.
//"key" prop이 없다는 메시지가 뜬다. key에 대해 알아보자.

/* 5-3. Key 
 * key는 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내기 위해 사용함.
 * 유동적인 데이터를 다룰 때, key가 없다면 Virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지한다.
 * 하지만, key가 있다면 key를 이용해 어떤 변화가 일어났는지 더 빠르게 알아낼 수 있다.
*/

/* 5-3-1. Key 설정
 * key값을 설정할 때는, map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하듯이 설정하면 된다.
 * key값은 언제나 유일해야 하므로, 데이터가 가진 고윳값을 key값으로 설정해야 한다.
 * 게시물 번호와 같이 고유번호와 같은 것을 key값으로 설정하면 좋다. 그러나 이런 것이 없을 땐, map 함수에 전달되는 콜백 함수의 인수인 index 값을 사용하면 된다.
 * IterationSample 컴포넌트를 수정해 보자.
 */

/* 5-4. 응용
 * 이제부터 고정된 배열을 렌더링하는것이 아닌, 동적인 배열을 렌더링하는 것을 구현해 본다.
 * 진행순서: (1) 초기 상태 설정하기 => (2) 데이터 추가 기능 구현하기 => (3) 데이터 제거 기능 구현하기
*/

/* 5-4-1. 초기 상태 설정하기
 * IterationSample 컴포넌트 수정
*/

/* 5-4-2. 데이터 추가 기능 구현하기
 * IterationSample 컴포넌트 수정
*/

/* 5-4-3. 데이터 삭제 기능 구현하기
 * IterationSample 컴포넌트 수정
*/

//반드시 기억할 것!
//(1) 컴포넌트 배열을 렌더링할 때는 반드시 key값 설정에 유의하자. key는 언제나 유일해야 한다. key값이 중복되면 렌더링 과정에서 오류가 발생한다.
//(2) 상태 안에서 배열을 변경할 때는 배열에 직접 접근하여 수정하는 것이 아니라, 배열 내장 함수를 사용해 새로운 배열을 만든 후 이를 새로운 상태로 설정해 줘야 한다.

class App extends Component {
  render() {
    return (
      <IterationSample />
    );
  }
}

export default App;
