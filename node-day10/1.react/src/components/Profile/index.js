//退出传history 方式
// import React, {Component} from 'react';
// import {withRouter} from 'react-router-dom';
// export default class Profile extends Component {
// 	handClick = ()=>{
// 		localStorage.removeItem('login');
// 		this.props.history.push('/');
// 	}
//     render() {
//       return (
//         <div>
//           个人页面<br/>
//           <button className="btn btn-danger" onClick={this.handClick}>退出登录</button>
//         </div>
//       )
//     }
// }


//withRouter方式
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
class Profile extends Component {
	handClick = ()=>{
		localStorage.removeItem('login');
		this.props.history.push('/');
	}
	render() {
		return (
            <div>
              个人页面<br/>
              <button className="btn btn-danger" onClick={this.handClick}>退出登录</button>
            </div>
		)
	}
}

export default withRouter(Profile);