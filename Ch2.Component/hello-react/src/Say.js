import React, {useState} from 'react';

//App.js의 2-4-2-2. useState 사용하기 관련 예제
const Say = () => {
    const [message, setMessage] = useState(''); //useState() 함수 인자: 상태의 초깃값 //클래스형 컴포넌트의 state 초깃값과 달리, 반드시 객체 형태가 아니어도 됨. 자유 형태임.
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    //버튼 2개 배치(각각 '입장', '퇴장'이라고 적힌 버튼)
    return (
        <div>
          <button onClick = {onClickEnter}>입장</button> 
          <button onClick = {onClickLeave}>퇴장</button>
          <h1>{message}</h1>
        </div>
    ); //함수를 호출하면 배열이 반환됨. 첫째 원소는 현재 상태, 두 번째 원소는 상태를 바꾸어주는 함수(setter 함수)
};     //여기서는 배열 비구조화 할당을 통해 message, setMessage라고 이름을 설정함.
//App 컴포넌트에서 Say 컴포넌트를 렌더링하여 '입장', '퇴장' 버튼을 클릭하면 {message}에 '안녕하세요', '안녕히 가세요!'가 출력된다.

//App.js의 2-4-2-3. 한 컴포넌트에서 useState 여러 번 사용하기 관련 예제
const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState('black'); //setColor: 최초값은 검정색

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style = {{ color }}>{message}</h1>

      <button style={{ color: 'red'}} onClick={() => setColor('red')}>빨간색</button>
      <button style={{ color: 'green'}} onClick={() => setColor('green')}>초록색</button>
      <button style={{ color: 'blue'}} onClick={() => setColor('blue')}>파란색</button>
    </div>
  );
}; //입/퇴장, 글씨 색상이라는 두 가지 상태가 관리되고 있음. //빨간색, 초록색, 파란색 버튼을 클릭하면 {message}가 각각 빨강, 초록, 파랑색으로 바뀐다.

export default Say;