const Validate = (value, rules) => {
    let isValid = true;
    let tmpErrorMsg='';
    let tmpisValid ;
    let errorMsg='';
    let checkval;
    if (value instanceof Array && value[0] !== undefined)
    {
      checkval = value[0];
    }
    else
    {
      if (value instanceof Array && value[0] === undefined)
        checkval='';
      else
        checkval = value;
    }
    

    for (let rule in rules) {
     
      switch (rule) {
      
          case 'minLength': 
              tmpisValid = minLengthValidator(checkval, rules[rule]); 
              console.log(tmpisValid)
              tmpErrorMsg = !tmpisValid ? `Min Length - ${rules[rule]}` : '' 
              console.log(tmpErrorMsg)
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)    
          break;
          
          case 'maxLength': 
              tmpisValid = maxLengthValidator(checkval, rules[rule]); 
              console.log(tmpisValid)
              tmpErrorMsg = !tmpisValid ? `Max Length - ${rules[rule]}` : '' 
              console.log(tmpErrorMsg)
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;

          case 'isRequired': 
              tmpisValid = requiredValidator(checkval); 
              console.log(tmpisValid)
              tmpErrorMsg = !tmpisValid ? 'Mandatory Field' : '' 
              console.log(tmpErrorMsg) 
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;

          case 'isNumber': 
              tmpisValid = numberValidator(checkval); 
              console.log(tmpisValid)
              tmpErrorMsg = !tmpisValid ? 'Numeric Field' : ''   
              console.log(tmpErrorMsg)
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;

          case 'isAlpha': 
          tmpisValid = alphaValidator(checkval); 
          console.log(tmpisValid)
          tmpErrorMsg = !tmpisValid ? 'Alpha Field' : ''   
          console.log(tmpErrorMsg)
          isValid = isValid && tmpisValid
          if(!tmpisValid)
            errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;

          case 'isAphaNumeric': 
          tmpisValid = alphanumericValidator(checkval); 
          console.log(tmpisValid)
          tmpErrorMsg = !tmpisValid ? 'AlphaNumeric Field' : ''   
          console.log(tmpErrorMsg)
          isValid = isValid && tmpisValid
          if(!tmpisValid)
            errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;
          
          case 'isAphaNumericSpl': 
          tmpisValid = alphanumericsplValidator(checkval); 
          console.log(tmpisValid)
          tmpErrorMsg = !tmpisValid ? 'AlphaNumeric Field' : ''   
          console.log(tmpErrorMsg)
          isValid = isValid && tmpisValid
          if(!tmpisValid)
            errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;
          
          case 'isEmail': 
              tmpisValid = emailValidator(checkval); 
              console.log(tmpisValid)
              tmpErrorMsg = !tmpisValid ? 'Invalid Email' : '' 
              console.log(tmpErrorMsg)
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)    
          break;
          
          default: 
            isValid = true;
            errorMsg = ''   
          break;
      }
    }
    return  {
        valid: isValid,
        errorMsg: errorMsg
      }    
  }
  
  const setErrorMsg = (ErrMessage,message) => {
    let resMessage;
    if (ErrMessage.length > 0) {
      resMessage=ErrMessage.concat(',',message)
    }
    else
      resMessage=message

    console.log(resMessage)
    return resMessage
  }

  /**
   * minLength 
   * @param  value 
   * @param  minLength
   * @return          
   */
  const minLengthValidator = (value, minLength) => {
      return value.length >= minLength;
  }
  
  /**
   * maxLength 
   * @param  value 
   * @param  maxLength
   * @return          
   */
  const maxLengthValidator = (value, maxLength) => {
    return value.length <= maxLength;
}

  /**
   * Check to confirm that field is required
   * 
   * @param  value 
   * @return       
   */
  const requiredValidator = value => {
      return value.trim() !== '';	
  }

  /**
   * Check to confirm that field has only numbers
   * 
   * @param  value 
   * @return       
   */
  const numberValidator = value => {
    if(value.length >0) {
      const pattern = /^[0-9]+$/
      return pattern.test(value)	
    }
    else
      return true;
}

/**
   * Check to confirm that field has only Alpha
   * 
   * @param  value 
   * @return       
   */
  const alphaValidator = value => {
    if(value.length >0) {
      const pattern = /^[a-zA-Z]+$/
      return pattern.test(value)	
    }
    else
      return true;
}
  
/**
   * Check to confirm that field has only AlphaNumeric
   * 
   * @param  value 
   * @return       
   */
  const alphanumericValidator = value => {
    if(value.length >0) {
      const pattern = /^[a-zA-Z0-9]+$/
      return pattern.test(value)	
    }
    else
      return true;
}

/**
   * Check to confirm that field has only AlphaNumeric and Special Chars
   * 
   * @param  value 
   * @return       
   */
  const alphanumericsplValidator = value => {
    if(value.length >0) {
      const pattern = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/
      return pattern.test(value)	
    }
    else
      return true;
}
  
  /**
   * Email validation
   * 
   * @param value
   * @return 
   */
  const emailValidator = value => {
    if(value.length >0) {
     // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(value).toLowerCase());
    }
    else
      return true
  }
  
  export default Validate;