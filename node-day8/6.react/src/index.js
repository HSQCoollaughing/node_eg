import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import 'asset-css/base.css';
import 'asset-css/layout.css';
import $ from 'jquery';
/**
 * 1.如何定义和使用复合组件
 * 2.如何跟后台进行数据交互
 */
class Search extends React.Component {
	constructor(){
		super();
		this.state = {wd:'', words:[], index:-1};
	}
	// handleChange = (event) =>{
	// 	let wd = event.target.value;
	// 	this.setState({wd}, ()=>{
	// 		$.ajax({
	// 			type: 'get',
	// 			url: 'http://www.baidu.com/su',
	// 			dataType: 'jsonp',
	// 			jsonp: 'cb',
	// 			data: {wd},
	// 			success: (res)=>{
	// 				this.setState({words: res.s, wd});
	// 				$('.search-group .suggestion').show();
	// 			}
	// 		});
	// 	});
	// }
	handleChange = (event) => {
    let wd = event.target.value;
    /**
     * 1.success成功回调函数
     * 2.then
     * 3.done
     * https://www.baidu.com/su?cb=jQuery32105310044693736287_1512287350132&wd=a&_=1512287350133
     */
    this.setState({wd},()=>{
      $.ajax({
        type:'GET',
        url:`http://www.baidu.com/su`,
        dataType:'jsonp',//指定响应体的内容类型
        //http://www.baidu.com/su?cb=xxx
        jsonp:'cb',//指定在后台接收回调方法名的参数名
        data:{wd},//传递数据
        success:(result)=>{
          	this.setState({words:result.s});
			$('.search-group .suggestion').show();
        }
      })
    });
  }

	// handleKeyDown = (event)=>{
	// 	let keyCode = event.keyCode;
	// 	if (keyCode == 40 || keyCode == 38) {
	// 		if (keyCode == 40) {//向下
	// 			index++;
	// 			if(index>=this.state.words.length){
	// 				index = -1;
	// 			}
	// 		} else if(keyCode == 38) {//向上
	// 			index--;
	// 			if(index==-2){
	// 				index = this.state.words.length - 1;
	// 			}
	// 		}
	// 		this.setState({index});
	// 	}
	// }
	handleKeyDown = (event)=>{
		let keyCode = event.keyCode;
		if(keyCode == 40 || keyCode == 38){
			console.log(1)
			let index = this.state.index;
			if(keyCode == 40){//向下
			  	if(++index>=this.state.words.length){
			    	index = -1;
			  }
			}else if(keyCode = 38){//向上
			  	if(--index==-2){
			    	index=this.state.words.length-1;
			  	}
			}
			this.setState({index});
	 	}
	}
  	render() {
   //  return (
			// <div className="container">
			// 	<div className="row">
			// 		<div className="col-md-8 col-md-offset-2">
			// 			<div className="panel panel-default">
			// 				<div className="panel-heading">
			// 					<input type="text" className="form-control"/>
			// 				</div>
			// 				<div className="panel-body">
			// 					<ul className="list-group">
			// 					  <li className="list-group-item"></li>
			// 					</ul>
			// 				</div>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>
   //  )
	                            // <!--
	                            // <input type="text" placeholder="请输入搜索关键词" autocomplete="off" name="q" value={this.state.index == -1?this.state.wd:this.state.words[this.state.index]} onChange={this.handleChange} onKeydown={this.handleKeyDown}  />
	                            // <input type="text" placeholder="请输入搜索关键词" autocomplete="off" name="q" value={this.state.index == -1?this.state.wd:this.state.words[this.state.index]} onKeyDown={this.handleKeyDown} onChange={this.handleChange} />

	                            // -->
   		return (
	   		<div id="container" className="clearfix">
	            <div className="container-main">
	                <div id="pagelet-searchbar">
	                    <div className="search-group clearfix">
	                        <div className="search">
	                            
	                            <input type="text" placeholder="请输入搜索关键词" autocomplete="off" name="q" value={this.state.index == -1?this.state.wd:this.state.words[this.state.index]} onKeyDown={this.handleKeyDown} onChange={this.handleChange} />
	                        </div>
	                        <div className="search-btn">搜索</div>

	                        <div className="suggestion nobg">
	                            <div className="suginner"> 
	                            	<ul className="suglist">
                            			{
						                    this.state.words.map((item, index) => (
						                      <li key={index} className={(index==this.state.index?"over":"")}>{item}</li>
						                    ))
					                  	}
	                            	</ul>
	                            </div>
	                        </div>
	                    </div>
	                </div>
                </div>
	        </div>
   		);
  }
}
ReactDOM.render(<Search/>, document.querySelector('#root'));