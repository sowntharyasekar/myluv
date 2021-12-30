import React from "react";
import Input from "../formcomponent/Input";
import Button from "../formcomponent/Button";
import Select from "../formcomponent/Select";
import Validate from "../validate";
import Radio from "../formcomponent/Radio";
import Recipe from "./Recipe";
const initialFormState = {

    id: {
        type: 'text',
        value: '',
        placeholder: 'Enter recipe id',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          minLength: 1,
          maxLength: 2,
          isRequired: true,
          isNumber: true
        },
      },
      name: {
        type: 'text',
        value: '',
        placeholder: 'Enter recipe name',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          minLength: 4,
          maxLength: 10,
          isRequired: true,
          
        },
      },
      type: {
        type: 'select',
        value: '',
        placeholder: 'Enter veg/non-veg type',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          isRequired: true,
        },
        options: [
          { value: 'Veg', displayValue: 'Veg' },
          { value: 'Non-veg', displayValue: 'Non-veg'}
        ]
      },
      image: {
          type: 'image',
          value: '',
          placeholder: 'Enter recipe id',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
            minLength: 1,
            maxLength: 2,
            isRequired: true,
            isNumber: true
          },
        },
        cost: {
          type: 'text',
          value: '',
          placeholder: 'Enter cost ',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
            minLength: 1,
            maxLength: 2,
            isRequired: true,
            isNumber: true
          },
        },
    }
class Addform extends React.Component{
     
    state = {
      loading:false,
      formIsValid: false,
      formControls: {
        id: {
          type: 'text',
          value: '',
          placeholder: 'Enter recipe id',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
            minLength: 1,
            maxLength: 10,
            isRequired: true,
            isNumber: true
          },
        },
        name: {
          type: 'text',
          value: '',
          placeholder: 'Enter recipe name',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
            minLength: 2,
            maxLength: 20,
            isRequired: true,
            
          },
        },
        type: {
          type: 'select',
          value: '',
          placeholder: 'Enter veg/non-veg type',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: 'Vegetarian', displayValue: 'Veg' },
            { value: 'Non-vegetarian', displayValue: 'Non-veg'}
          ]
        },
        image: {
            type: 'url',
            value: '',
            placeholder: 'Enter recipe image url ',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
             
              isRequired: true,
              
            },
          },
          cost: {
            type: 'text',
            value: '',
            placeholder: 'Enter cost ',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
              minLength: 1,
              maxLength: 10,
              isRequired: true,
              isNumber: true
            },
          },
      }
    }
    
    
    changeHandler = event => {
      
        const name = event.target.name;
        console.log("Name : "+name);
  
        const updatedControls = {
          ...this.state.formControls
        };
  
        const updatedFormElement = {
          ...updatedControls[name]
        };
  
        let value;
        let selectedOptions;
        let newValArray;
  
       console.log(updatedControls[name].validationRules.isNumber)
       if (updatedControls[name].validationRules.isNumber)
        {
          const pattern = /^[0-9\b]+$/ 
          console.log(pattern.test(event.target.value));
          if ((event.target.value!== '') && (!pattern.test(event.target.value)))
            return;
        }
  
        if (updatedControls[name].validationRules.maxLength)
        {
          if (event.target.value.length > updatedControls[name].validationRules.maxLength)
            return;
        }
  
        if (updatedControls[name].value instanceof Array &&
          updatedControls[name].type === 'select' &&
          updatedControls[name].multiple !== undefined &&
          updatedControls[name].multiple
          )
        {
          selectedOptions = event.target.selectedOptions;
          newValArray = [...selectedOptions].map(option => option.value);
          value = newValArray;
          console.log("MultiSelect - Value : "+value)
        }
        else 
        {
          value = event.target.value;
          if (updatedControls[name].value instanceof Array &&
          updatedControls[name].type === 'checkbox') {
            console.log("Before Checkbox Value : "+value)
            console.log(updatedControls[name].value.indexOf(value));
            if(updatedControls[name].value.indexOf(value) > -1) {
            newValArray = 
            updatedControls[name].value.filter(s => s !== value)
            } else {
            newValArray = [...updatedControls[name].value, value];
            }
          value = newValArray;
          console.log("Checkbox Value : "+value)
          }
          else
          {
          value = event.target.value
          console.log("Value : "+value)
          }
        }
       
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        console.log(updatedFormElement.value);
  
        let ValidationResult = Validate(value, updatedFormElement.validationRules);
        console.log(ValidationResult)
        updatedFormElement.valid = ValidationResult.valid;
        if ((!updatedFormElement.valid) && updatedFormElement.touched)
        {
          updatedFormElement.errorMsg = ValidationResult.errorMsg
        }
        else {
          updatedFormElement.errorMsg = ''
        }
  
        updatedControls[name] = updatedFormElement;
  
        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
          formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }
  
        this.setState({
          formControls: updatedControls,
          formIsValid: formIsValid
        });
  
    }
    
    
    formSubmitHandler = async () => {
    const formData = {};
    for (let formElementId in this.state.formControls) {
        formData[formElementId] = this.state.formControls[formElementId].value;
    }
      
        console.dir(formData);
       console.log(formData);
        
        // Axios Call to Save A Post in Backend
      

        Recipe.post('/recipe.json',formData).then(response=>{
            console.log(response);
            
          })
      
  alert("success")
  this.props.history.push('/adminlogin/admin/Setting')
      
      
    }
    handleClearForm = () => {
      const initialState = {
        formIsValid: false,
        formControls: initialFormState,
      };
  
      this.setState(initialState);
      
    };
  
    render() {
      
     
      return (
     
        <div class=" container formwidth   bg-dark text-white mb-4  p-3" >
        <Input inputType={'text'}
                   title={'ID'}
                   name={'id'}
                   placeholder={this.state.formControls.id.placeholder}
                   value={this.state.formControls.id.value}
                   handleChange={this.changeHandler}
                   touched={this.state.formControls.id.touched}
                   valid={this.state.formControls.id.valid}
                   errorMsg={this.state.formControls.id.errorMsg}
        />
        <Input inputType={'text'}
                   title={'Name'}
                   name={'name'}
                   placeholder={this.state.formControls.name.placeholder}
                   value={this.state.formControls.name.value}
                   handleChange={this.changeHandler}
                   touched={this.state.formControls.name.touched}
                   valid={this.state.formControls.name.valid}
                   errorMsg={this.state.formControls.name.errorMsg}
        />

<Select 
                title={'Type'}
                name={'type'}
                placeholder={this.state.formControls.type.placeholder}
                value={this.state.formControls.type.value}
                handleChange={this.changeHandler}
                options={this.state.formControls.type.options}
                touched={this.state.formControls.type.touched}
                valid={this.state.formControls.type.valid}
                errorMsg={this.state.formControls.type.errorMsg}
            />

              <Input inputType={'url'}
                   title={'Image'}
                   name={'image'}
                accept={"image/*"}
                   placeholder={this.state.formControls.image.placeholder}
                   value={this.state.formControls.image.value}
                   handleChange={this.changeHandler}
                   touched={this.state.formControls.image.touched}
                   valid={this.state.formControls.image.valid}
                   errorMsg={this.state.formControls.image.errorMsg}/>
                   <Input inputType={'text'}
                   title={'cost'}
                   name={'cost'}
                   placeholder={this.state.formControls.cost.placeholder}
                   value={this.state.formControls.cost.value}
                   handleChange={this.changeHandler}
                   touched={this.state.formControls.cost.touched}
                   valid={this.state.formControls.cost.valid}
                   errorMsg={this.state.formControls.cost.errorMsg}/>
           <Button 
            action = {this.formSubmitHandler}
            type = {'white'} 
            title = {'Submit'} 
            
            disabled={! this.state.formIsValid}
        /> { /*Submit */ }
        
        <Button 
          action = {this.handleClearForm}
          type = {'danger'}
          title = {'Cancel'}
          
        /> {/* Cancel the form */}
        
  </div>
      )
    }
      }
    
export default Addform;