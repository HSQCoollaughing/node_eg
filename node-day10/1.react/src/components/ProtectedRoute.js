//退出时传history
// import React from 'react';
// import {Route,Redirect} from 'react-router-dom';
// export default function ({component: Component, ...rest}){
// 	return (
// 		<Route {...rest} render={({history,location})=>(
// 			localStorage.getItem('login') ? <Component history={history}/> : <Redirect to={{pathname: '/login', state:{from:location.pathname}}} />
// 		)} />
// 	)
// }

//withRouter方式
import React from 'react';
import {Route,Redirect} from 'react-router-dom';
export default function ({component: Component, ...rest}){
	return (
		<Route {...rest} render={({location})=>(
			localStorage.getItem('login') ? <Component/> : <Redirect to={{pathname: '/login', state:{from:location.pathname}}} />
		)} />
	)
}

