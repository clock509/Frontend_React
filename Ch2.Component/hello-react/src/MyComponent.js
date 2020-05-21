import React, {Component} from 'react';
import PropTypes from 'prop-types'      //2-3-6부터 사용하는 기능

//App.js의 2-2-1 관련 예제.
const MyComponent = () => { // () => {}, 이른바 ES6의 화살표 함수를 사용하여 함수로 만들어 줌. 
                            //단, function에 의한 함수 선언 방식과 용도가 다르기 때문에 완전히 대체하지는 않는다. 화살표 함수는 주로 함수를 파라미터로 전달할 때 유용하게 사용한다.
                            // function()에서의 this가 가리키는 것은 자신이 종속된 객체를 가리키며, 화살표 함수에서의 this는 자신이 종속된 인스턴스를 가리킨다.
    return <div> 새로운 컴포넌트를 생성했습니다. </div>;
};

//App.js의 2-3-1, 2-3-3 관련 예제.
const MyComponent = props => {
    return <div>안녕하세요. 제 이름은 {props.name} 입니다.</div>;
}

MyComponent.defaultProps = {
    name: '기본 이름'
};

//App.js의 2-3-4 관련 예제.
const MyComponent = props => {
    return (
        <div>
            안녕하세요. 제 이름은 {props.name} 입니다. <br />
            children 값은 {props.children} 입니다.
        </div>
    )
}

MyComponent.defaultProps = {
    name: '기본 이름'
};

//App.js의 2-3-5 관련 예제(1)
const MyComponent = props => {
    const {name, children} = props;
    return (
        <div>
            안녕하세요. 제 이름은 {name} 입니다. <br />
            children 값은 {children} 입니다.
        </div>
    );
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

//App.js의 2-3-5 관련 예제(2): 함수의 파라미터가 객체일 때, 그 값을 비구조화하여 값을 추출해낼 수 있다.
const MyComponent = ({name, children}) => {
    return (
        <div>
            안녕하세요. 제 이름은 {name} 입니다. <br />
            children 값은 {children} 입니다.
        </div>        
    );
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

//App.js의 2-3-6 관련 예제
//먼저 import 구문으로 protoTypes를 불러온다.
const MyComponent = ({name, children}) => {
    return (
        <div>
            안녕하세요. 제 이름은 {name} 입니다. <br />
            children 값은 {children} 입니다.
        </div>        
    );
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

MyComponent.propTypes = {
    name: PropTypes.string //name값은 무조건 문자열(string) 형태로 전달해야 한다는 것을 의미함.
}

//App.js의 2-3-6-1. 관련 예제.
//propTypes를 지정하지 않았을 떄 크롬 개발자 도구에서 경고 메시지를 띄워주려면: propTypes를 지정할 때 뒤에 isRequired를 붙여준다.
//favoriteNumbers라는 변수를 필수 props로 지정하는 예제.
const MyComponent = ({name, favoriteNumbers, children}) => {
    return (
        <div>
            안녕하세요. 제 이름은 {name} 입니다. <br />
            children 값은 {children} 입니다 <br />
            제가 좋아하는 숫자는 {favoriteNumbers}입니다.
        </div>        
    );
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumbers: PropTypes.number.isRequired
}

//App.js의 2-3-7. 관련 예시
class MyComponent extends Component {
    render() {
        const {name, favoriteNumber, children} = this.props; //비구조화 할당
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다. <br />
                children 값은 {children}입니다. <br />
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        )
    }
}

MyComponent.defaultProps = {
    name: '기본 이름'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumbers: PropTypes.number.isRequired
}

//클래스형 컴포넌트에서 defaultProps와 propTypes를 설정할 때 class 내부에서 지정할 수도 있음.
class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
    };

    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };
    render() {
        const {name, favoriteNumber, children} = this.props; //비구조화 할당
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다. <br />
                children 값은 {children}입니다. <br />
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        )
    }
}

export default MyComponent; // 모듈 내보내기
