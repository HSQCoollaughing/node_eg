import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';


function Home() {
    return <h1>Home</h1>
}

function User() {
    return <h1>Home</h1>
}

function Profile() {
    return <h1>Profile</h1>
}

ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/user">用户管理</Link></li>
                <li><Link to="/profile">个人设置</Link></li>

            </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/user" component={User}/>
            <Route path="/profile" component={Profile}/>
        </div>
    </Router>,
    document.querySelector('#root')
);


