import React, {Component} from 'react';

export default class Login extends Component {
    handClick = () => {
        localStorage.setItem('login', 'true');
        this.props.history.push(this.props.location.state ? this.props.location.state.from : '/')
    }

    render() {
        return (
            <div>
                <button className="btn btn-default" onClick={this.handClick}>登录</button>
            </div>
        )
    }
}

