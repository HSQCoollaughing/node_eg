import React from 'react';
import {Route,Link} from 'react-router-dom';
//第三种渲染方式 children
export default function({to,children}){
	return (
		<Route exact path={to} children={({match})=>(
			<li className={match?"active":""}><Link to={to}>{children}</Link></li>
		)} />

		//箭头函数 ()=>{return} ()=>()
		//{}要return
		//()不需要return
	)
}