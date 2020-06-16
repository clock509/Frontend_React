import React from 'react';
import styles from './CSSModule.module.css';

// const CSSModule = () => {
//   console.log(styles); //{ wrapper: "CSSModule_wrapper__uODqa"} // CSS Module에서 사용한 클래스 이름과 해당 이름을 고유화한 값이 키-값 형태로 들어있음.
//   //클래스를 적용하고 싶은 JSX 엘리먼트에 className={styles.[클래스 이름]} 형태로 전달해주면, 이 고유한 클래스 이름을 사용할 수 있다.
//   //전역적으로 선언한 클래스의 경우, 평상시 한 것처럼 그냥 문자열로 넣어 준다.
//   return (
//     <div className={styles.wrapper}>
//       안녕하세요, 저는 <span className="something">CSS Module!</span>
//     </div>
//   );
// };

/* 만약, CSS Module을 사용한 클래스 이름을 두 개 이상 적용할 때는 다음과 같이 코드를 작성하면 된다. */
const CSSModule = () => {
  console.log(styles); //{ wrapper: "CSSModule_wrapper__uODqa"} // CSS Module에서 사용한 클래스 이름과 해당 이름을 고유화한 값이 키-값 형태로 들어있음.
  //클래스를 적용하고 싶은 JSX 엘리먼트에 className={styles.[클래스 이름]} 형태로 전달해주면, 이 고유한 클래스 이름을 사용할 수 있다.
  //전역적으로 선언한 클래스의 경우, 평상시 한 것처럼 그냥 문자열로 넣어 준다.
  return (
    //아래 라인의 코드는 className={[styles.wrapper, styles.inverted].join(' ')}과 같은 표현이다.
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 < span className="something">CSS Module!</span>
    </div >
  );
};

//위 className에서 주목할 점: ES6 문법, 템플릿 리터럴(Template Literal)을 사용하여 문자열을 합한 것. 문자열 안에 자바스크립트 레퍼런스를 쉽게 넣어줄 수 있다.
//const name = '리액트';
// //const message = '제 이름은 ' + name + '입니다.'
//const message = `제 이름은 ${name}입니다.`; // 따옴표가 아닌 `(Backtick)이므로 주의!



export default CSSModule;