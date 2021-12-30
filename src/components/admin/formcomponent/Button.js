import React from 'react';


const Button = (props) => {
	//console.log(props.style);
	let disabled = false;
	let clr=null;
	if (props.disabled) {
		disabled = props.disabled
	}
		
	if(props.type==='primary')
	{
		clr='btn btn-primary';
	}
	else if(props.type==='secondary')
	{
		clr='btn btn-secondary';
	}
	else if(props.type==='white')
	{
		clr='btn btn-white';
	}
	else if(props.type==='danger')
	{
		clr='btn btn-danger';
	}
	else{
		clr='btn btn-dark';
	}
	return(
	<button 
		
		className = {clr}
		onClick= {props.action} 
		disabled={disabled}> 
		{props.title} 
	</button>)
}


export default Button;