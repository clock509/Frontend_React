import React, { useState } from 'react';

//아래 코드에서는 <li></li>가 반복되고 있다. 소량일 땐 괜찮지만, 저런 반복성 코드가 늘어날수록 파일 용량이 증가할 것이다.
//또, 보여줘야 할 데이터가 유동적이라면 이런 식으로의 코드 관리는 어렵다. 따라서 반복적인 내용을 효율적으로 보여주고 관리하는 방법이 필요하다.

const IterationSample = () => {
  return (
    <ul>
      <li>눈사람</li>
      <li>얼음</li>
      <li>눈</li>
      <li>바람</li>
      <li>눈사람</li>
    </ul>
  );
};

//5-2. 데이터 배열을 컴포넌트 배열로 변환하기 관련 예제
const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람', '눈사람'];
  const nameList = names.map(names => <li>{names}</li>);
  return <ul>{nameList}</ul>;
};

//문자열로 구성된 배열(names)의 값을 사용하여 <li></li> JSX 코드로 된 배열을 새로 생성한 후 nameList에 담는 코드.
//map 함수에서 JSX를 작성할 때는 DOM 요소를 작성해도 되고, 컴포넌트를 사용해도 된다.

//5-3-1. Key 설정 관련 예제
const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람', '눈사람'];
  const namesList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{namesList}</ul>;
};
//고유한 값이 없을 때만 index를 key로 사용해야 한다. index를 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링하지 못한다.

//5-4-1. 초기 상태 설정하기 관련 예제
const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
    { id: 5, text: '눈사람' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(6); //새로운 항목을 추가할 때 사용할 id

  const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
  return <ul>{namesList}</ul>;
};

//5-4-2. 데이터 추가 기능 구현하기
const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
    { id: 5, text: '눈사람' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(6); //새로운 항목을 추가할 때 사용할 id

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({ //배열에 새 항목 추가  * concat: 새로운 배열을 만들어 줌( <-> push: 기존 배열 자체를 변경함) //이는 '불변성 유지' 개념과 관련있음(상태를 업데이트할 때, 기존 상태를 그대로 두면서 새로운 값을 상태로 설정하는 것.)
      id: nextId, //nextId 값을 id로 설정
      text: inputText
    });
    setNextId(nextId + 1); //nextId 값에 1을 더해준다.
    setNames(nextNames); //names값을 업데이트 한다.
    setInputText(''); //기존의 inpurt 내용이 적힌 inputText를 비운다.
  }

  const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
  return (
    //ul 태그 상단에 input과 button을 렌더링하고, input의 상태를 관리함.
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가하기</button>
      <ul>{namesList}</ul>;
    </> //onClick 함수로 구현한 내용: 새로운 항목을 추가할 때 객체의 id 값은 nextId를 사용하고, button을 클릭할 때마다 id값은 1씩 증가되며 기존의 input 내용을 비움.
  );
};

//5-4-3. 데이터 삭제 기능 구현하기
//각 항목을 더블클릭하면 해당 항목이 화면에서 사라지는 기능 구현. 단, 이 때도 불변성을 유지하면서 업데이트 해야 하므로 배열 내장 함수인 filter 함수로 특정 항목을 지워나간다.
//filter 함수의 인자에 분류하고 싶은 조건을 반환하는 함수를 넣ㅇ러주면, 쉽게 분류할 수 있는데, 이를응용하여 특정 원소를 배열에서 제외할 수 있다.

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
    { id: 5, text: '눈사람' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(6); //새로운 항목을 추가할 때 사용할 id

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    //배열에 새 항목 추가  * concat: 새로운 배열을 만들어 줌( <-> push: 기존 배열 자체를 변경함)
    //이는 '불변성 유지' 개념과 관련있음(상태를 업데이트할 때, 기존 상태를 그대로 두면서 새로운 값을 상태로 설정하는 것.)
    const nextNames = names.concat({
      id: nextId, //nextId 값을 id로 설정
      text: inputText
    });
    setNextId(nextId + 1); //nextId 값에 1을 더해준다.
    setNames(nextNames); //names값을 업데이트 한다.
    setInputText(''); //기존의 inpurt 내용이 적힌 inputText를 비운다.
    console.log("Added");
  };
  //onRemove 함수를 만들고 각 li 요소에 이벤트 등록
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
    console.log('Deleted');
  };

  const namesList = names.map(name => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li> //onDoubliClick: HTML 요소를 더블클릭할 때 사용되는 이벤트
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가하기</button>
      <ul>{namesList}</ul>
    </>
  );
};
export default IterationSample;