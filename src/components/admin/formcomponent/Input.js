import React from 'react';


const Input = (props) => {
  let formControl = "form-control";
  
  // console.log(props.name)
  // console.log(props.valid)
  // console.log(props.touched)
  // console.log(props.errorMsg)

  if (props.touched && !props.valid) {
      formControl = 'form-control control-error';
  }
	return (  
  <div className="form-group">
    <label htmlFor={props.name} className="form-label">{props.title}</label>
    <input
      className={formControl}
      id={props.name}
      name={props.name}
      type={props.inputType}
      value={props.value}
      accept={props.accept}
      onChange={props.handleChange}
      placeholder={props.placeholder} 
      />
      {props.errorMsg  ?
          <div style={{color:"red", marginBottom: "15px", fontSize: "15px"}}>{props.errorMsg}</div> 
        : null
      }
    
  </div>
)
}

export default Input;