import React from 'react';


const Select = (props) => {
    let formControl = "";

    if (props.touched && !props.valid) {
        formControl = 'control-error';
	}

	return(<div className="form-group">
			<label htmlFor={props.name}> {props.title} </label><br/>
		    <select
		      id = {props.name}
			  name={props.name}
			  multiple={props.multiple}
		      value={props.value}
			  onChange={props.handleChange}
		      className={formControl}
			  >
		      <option value="" disabled>{props.placeholder}</option>
		      {props.options.map((option,index) => {
		        return (
		          <option
		            key={index}
					value={option.value}
		            label={option.displayValue}>{option.displayValue}</option>
		        );
		      })}
		    </select>
			{props.errorMsg  ? <p style={{color: "red"}}>{props.errorMsg}</p>: null}
		  </div>
		  )
	}	


export default Select;