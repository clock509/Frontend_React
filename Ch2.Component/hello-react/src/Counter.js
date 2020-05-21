import React, {Component} from 'react';

//App.js의 2-4-1. 관련 예시
class Counter extends Component {
    //constructor 메서드: 생성자 메서드. 컴포넌트의 state를 설정할 때 사용.
    constructor(props) {
        super(props); //클래스형 컴포넌트에서 constructor를 사용할 때는 반드시 super(props)를 호출해 주어야 함.
                      //현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출해 줌.
        //state의 초깃값 설정하기. //컴포넌트의 state는 객체 형식이어야 함.
        this.state = {
            number: 0
        };
    }
    render() {
        const {number} = this.state; //render함수에서 state를 조회할 때는 this.state로 조회함.
        return (
            <div>
                <h1>{number}</h1>
                <button
                //onClick을 통해 버튼이 클릭되었을 때 호출할 함수 지정.
                onClick = {() => { //event로 설정할 함수를 넣어줄 때는 화살표 함수 문법을 사용해야 한다.
                    //this.setState를 통해 버튼이 클릭되었을 때 호출할 함수를 지정.
                    this.setState({ number: number + 1}); //this.setState 함수는 state값을 변경할 수 있게 해 줌.
                }}
                > +1
                </button>
            </div>
        );
    }
}

//App.js의 2-4-1-1. state 객체 안에 여러 값이 있을 때
class Counter extends Component {
    constructor(props) {
        super(props);
        //state의 초기값 설정하기
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }
    render() {
        const { number, fixedNumber } = this.state; //state를 조회할 때는 this.state로 조회함.
        return(
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    onClick = {() => {
                        this.setState({ number: number + 1})
                        //this.setState({ number: number + 1, fixedNumber: fixedNumber + 2}) //두 값 모두 상태를 바꾸고 싶다면 this.setState에서 둘 다 설정해주면 된다.
                    }}
                > +1 
                </button>
            </div>
        )
    }
}

//App.js의 2-4-1-2. state를 constructor에서 꺼내기
class Counter extends Component {
    //state 초기값을 지정하는 다른 방법. constructor 메서드를 선언하지 않아도 됨.
    state = {
        number: 0,
        fixedNumber: 0
    };
    render() {
        const {number, fixedNumber} = this.state; //state를 조회할 때는 this.state로 조회함.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    onClick = {() => {
                        this.setState({ number: number + 1})
                    }}
                > +1 
                </button>
            </div>
        )
    }
}

//App.js의 2-4-1-3. this.state에 객체 대신 함수 인자 전달하기
//state 값을 업데이트 할 때, this.state를 사용하면 상태가 비동기적으로 업데이트된다.
//즉 state값이 바로 바뀌지 않기 떄문에, this.setState를 아래와 같이 두 번 사용하더라도 숫자가 1씩만 더해진다.
class Counter extends Component {
    //state 초기값을 지정하는 다른 방법. constructor 메서드를 선언하지 않아도 됨.
    state = {
        number: 0,
        fixedNumber: 0
    };
    render() {
        const {number, fixedNumber} = this.state; //state를 조회할 때는 this.state로 조회함.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    onClick = {() => {
                        this.setState({ number: number + 1})
                        this.setState({ number: this.state.number + 1}) //this.setState가 두 번 사용되었음에도 숫자가 1씩만 더해진다.
                    }}
                > +1 
                </button>
            </div>
        )
    }
}

//this.setState를 사용할 때 객체 대신 함수를 인자로 넣으면 위 문제를 해결할 수 있음.
//this.setState((prevState, state)) - prevState: 기존 상태, props: 현재 지;니고 있는 props(업데이트 과정에서 props가 불필요하다면 생략해도 됨)
class Counter extends Component {
    //state 초기값을 지정하는 다른 방법. constructor 메서드를 선언하지 않아도 됨.
    state = {
        number: 0,
        fixedNumber: 0
    };
    render() {
        const {number, fixedNumber} = this.state; //state를 조회할 때는 this.state로 조회함.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    onClick = {() => {
                        this.setState(prevState => {
                            return {
                                number: prevState.number + 1
                            };
                        });
                        //위 코드와 아래 코드는 기능상 완전히 똑같음. 아래 코드는 함수에서 바로 객체를 반환한다는 의미임.
                        this.setState(prevState => ({
                            number: prevState.number + 1
                        }));
                    }}
                > +1 
                </button>
            </div>
        )
    }
}

//App.js의 2-4-1-4. this.setState가 끝난 후 특정 작업 실행하기
//값을 업데이트한 후 특정 작업을 하고 싶을 때는 setState의 두 번쨰 파라미터로 callback 함술르 등록하여 작업을 처리할 수 있다.abs
class Counter extends Component {
	//state 초기값을 지정하는 다른 방법. constructor 메서드를 선언하지 않아도 됨.
	state = {
		number: 0,
		fixedNumber: 0
	};
	render() {
		const {number, fixedNumber} = this.state; //state를 조회할 때는 this.state로 조회함.
		return (
		<div>
			<h1>{number}</h1>
			<h2>바뀌지 않는 값: {fixedNumber}</h2>
			<button
				onClick = {() => {
					this.setState(
						//첫 번째 파라미터
						{
							number: number + 1
						},
						//두 번째 파라미터
						() => {
							console.log('방금 setState 함수가 호출되었습니다.');
							console.log(this.state);
						});
				}}
			> +1 
			</button>
		</div>
		)
	}
}

export default Counter;

