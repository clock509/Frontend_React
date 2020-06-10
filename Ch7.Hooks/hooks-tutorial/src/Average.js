import React, { useState, useMemo, useCallback, useRef } from 'react';

//7-4.useMemo 관련 예제
const getAverage = numbers => {
  console.log('평균값 계산 중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
  };

  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {getAverage(list)}
      </div>
    </div>
  );
};
//위 코드에서는 input 내용이 바뀔 때마다 getAverage 함수가 렌더링되고 있다.
//useMemo hook을 이용해 특정 값이 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 식으로 수정해 보자.

//7-5.useCallback 관련 예제
const getAverage = numbers => {
  console.log('평균값 계산 중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  //useCallback(생성하고 싶은 함수, 배열) //두 번째 파라미터인 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야 함.
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); //컴포넌트가 처음 렌더링될 때만 함수 생성(배열 안에 아무 조건도 넣어주지 않았으므로)
  const onInsert = useCallback(e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }, [number, list]); //number 혹은 list가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
}; //list 배열 내용이 바뀔 때만 getAverage 함수가 호출됨.
//함수 내부에서 상태 값에 의존해야 하는 경우, 그 값을 반드시 useCallback의 두 번째 파라미터에 포함시켜야 한다.
//onChange의 경우 기존의 값을 조회하지 않고 바로 설정만 하기 때문에 배열이 비어도 상관없지만, onInsert의 경우 기존의 number, list를 조회해서 nextList를 생성하므로 배열 안에 꼭 조건으로 넣어줘야 한다.
//어떤 상황에서 어떤 hook을 사용해야 할까??? ::: useCallback: 함수를 재사용하려고 할 때 <==> useMemo: 숫자, 문자열, 객체 등 일반값을 재사용하려고 할 때

/** 아래 두 코드는 같은 내용이다.
useCallback(() => {
  console.log('hello world');
}, [])

useMemo(() => {
  const fn = () => {
    console.log('hello world');
  };
  return fn;
}, [])
*/

/** 7-6.useRef 관련 예시*/
const getAverage = numbers => {
  console.log('평균값 계산 중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(1); //useRef()에 파라미터를 넣어주면 이 값이 .current값의 기본값이 됨.

  //useCallback(생성하고 싶은 함수, 배열) //두 번째 파라미터인 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야 함.
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); //컴포넌트가 처음 렌더링될 때만 함수 생성(배열 안에 아무 조건도 넣어주지 않았으므로)
  const onInsert = useCallback(e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    inputEl.current.focus();
  }, [number, list]); //number 혹은 list가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;