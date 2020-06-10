import React, { useState, useEffect, useReducer } from 'react';
import useInputs from './useInputs';

// 7-1-1. useState를 여러 번 사용하기 관련 예제
const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

// 7-2. useEffect 관련 예제
const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    console.log({ name, nickname });
  });

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

// 7-2-1. 마운트될 때만 실행하고 싶을 때 관련 예제.
const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log('마운트될 때만 실행됩니다.');
  }, []);

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

// 7-2-2. 특정 값이 업데이트될 때만 실행하고 싶을 때 관련 예제.
const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log(name);
  }, [name]); //name값만 검사하므로, 크롬 콘솔에는 name값의 변화만 추적된다.

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

// 7-2-3. 뒷정리하기 관련 예제
const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }); //컴포넌트가 나타날 때 콘솔에 'effect'가 나타나고, 사라질 때 'cleanup'이 나타난다. 
  //그리고 렌더링될 때마다 뒷정리 함수가 계속 나타나며, 뒷정리 함수가 호출될 때는 업데이트 되기 직전의 값을 보여준다.

  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }, [name]); //언마운트될 때만 뒷정리 함수를 호출하고 싶다면, useEffect 함수의 두 번째 파라미터에 빈 배열을 넣으면 된다. //여기서는 []을 넣을 경우 ESLint 경고가 나타나서, [name]을 넣는다.

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

// 7-3-2. 인풋 상태 관리하기 관련 예제
//input 태그에 name값을 할당
function reducer(state, action) {
  return {
    ...state, [action.name]: action.value
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, { //useReducer에서의 액션은 어떤 값이라도 사용 가능함.
    name: '',
    nickname: '' //input 태그의 name값과 같아야 한다.
  });

  const { name, nickname } = state;
  const onChange = e => { //이벤트 객체가 가지고 있는 e.target값 자체를 액션값으로 사용
    dispatch(e.target);
  }

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};


//7-7. 커스텀 hooks 만들기 관련 예제
const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: '' //inpu 태그의 name값과 같아야 한다.
  });

  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;