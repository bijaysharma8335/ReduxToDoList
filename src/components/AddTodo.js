import React, { Component } from 'react';
	 class AddTodo extends Component {

		handleClick(e) {
			const node = this.refs.input
			const text = node.value.trim()
			this.props.onAddClick(text)
			node.value = ''
		 }

	  render(){
		  return (
			 <div className="text-center col-md-12">
				 <h1 className="text-success">Please Enter Your Text Here !</h1>
				<input type = 'text' ref = 'input' />
					
				<button className="btn btn-block btn-danger m-2" onClick = {(e) => this.handleClick(e)}>
				   Add
				</button>
			 </div>
		  )
	   
		  }
	}
	export default AddTodo;