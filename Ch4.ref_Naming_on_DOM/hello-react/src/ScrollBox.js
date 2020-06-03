import React, { Component } from "react";

//ScrollBox 컴포넌트: JSX 인라인 스타일링 문법으로 스크롤 박스를 만든다.
//ScrollBox 컴포넌트 만들기 -> ScrollBox 컴포넌트에 ref 달기 -> ref를 이용하여 컴포넌트 내부 메서드 호출하기
class ScrollBox extends Component {
  //scrollToBottom 메서드는 부모 컴포넌트인 App 컴포넌트에서 ScrollBox에 ref를 달아 사용할 수 있다.
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box; //scrollHeight: 스크롤이 있는 박스 안의 div 높이(650), //clientHeight: 스크롤이 있는 box의 높이(300)
    /** 위 코드는 비구조화 할당 문법.
     * 다음 코드와 같은 의미임.
     * const scrollHeight = this.box.scrollHeight;
     * const clientHeight = this.box.clientHeight;
     */
    this.box.scrollTop = scrollHeight - clientHeight; //scrollTop: 세로 스크롤바 위치(0~350)
  }

  render() {
    const style = {
      border: "1px solid black",
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative'
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)'
    }

    return (
      //최상위 DOM에 ref를 달아 준다.
      <div
        style={style}
        ref={(ref) => { this.box = ref }}>
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;