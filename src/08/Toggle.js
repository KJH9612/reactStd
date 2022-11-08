import React, {Component} from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);

        this.state = {isToggleOn: true}

        // 콜백에서 this 사용하려면 바인드(bind) 필수
        // 번거롭다 느껴지면 [클래스 필드 문법 사용 OR arrow func] 사용
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn : !prevState.isToggleOn
        }))
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? '켜짐' : '꺼짐'}
            </button>
        );
    }
}

export default Toggle;