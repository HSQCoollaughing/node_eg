//是一个库，工具箱，是需要我们主动去调的
import React from 'react';
import ReactDOM from 'react-dom';

let names = ['大毛', '二毛', '三胖'];

ReactDOM.render(
	<ul>
		{
			names.map((item, index)=>{
				return <li key={index}>{item}</li>
			})
		}
	</ul>,document.querySelector('#root')
);