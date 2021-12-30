import React, { Component } from "react";
import Button from "./formcomponent/Button";
import Input from "./formcomponent/Input";
import "./background.css";
import Validate from "./validate";
import Admindashboard from "./admindashboard";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
const initialFormState = {
  my_email: {
    type: "text",
    value: "",
    placeholder: "What is your email",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      isRequired: true,
      isEmail: true,
    },
  },
  my_password: {
    type: "password",
    value: "",
    placeholder: "enter your password",
    valid: false,
    touched: false,
    validationRules: {
      isRequired: true,
      isAphaNumericSpl: true,
      minLength: 4,
      maxLength: 8,
    },
  },
};
class login extends Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: false,
      formIsValid: false,
      formControls: {
        my_email: {
          type: "text",
          value: "",
          placeholder: "What is your email",
          valid: false,
          errorMsg: "",
          touched: false,
          validationRules: {
            isRequired: true,
            isEmail: true,
          },
        },
        my_password: {
          type: "password",
          value: "",
          placeholder: "enter your password",
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
            isAphaNumericSpl: true,
            minLength: 4,
            maxLength: 8,
          },
        },
      },
    };
  }
  componentDidMount() {
    const updatedControls = {
      ...this.state.formControls,
    };

    let formIsValid = true;
    for (let formElementId in updatedControls) {
      let ValidationResult = Validate(
        updatedControls[formElementId].value,
        updatedControls[formElementId].validationRules
      );
      updatedControls[formElementId].valid = ValidationResult.valid;
      console.log(ValidationResult);
      if (
        !updatedControls[formElementId].valid &&
        updatedControls[formElementId].touched
      ) {
        updatedControls[formElementId].errorMsg = ValidationResult.errorMsg;
      } else {
        updatedControls[formElementId].errorMsg = "";
      }

      formIsValid = updatedControls[formElementId].valid && formIsValid;
    }

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid,
    });
  }

  changeHandler = (event) => {
    const name = event.target.name;
    console.log("Name : " + name);

    const updatedControls = {
      ...this.state.formControls,
    };

    const updatedFormElement = {
      ...updatedControls[name],
    };
    let value;

    console.log(updatedControls[name].validationRules.isNumber);
    if (updatedControls[name].validationRules.isNumber) {
      const pattern = /^[0-9\b]+$/;
      console.log(pattern.test(event.target.value));
      if (event.target.value !== "" && !pattern.test(event.target.value))
        return;
    }
    if (updatedControls[name].validationRules.maxLength) {
      if (
        event.target.value.length >
        updatedControls[name].validationRules.maxLength
      )
        return;
    }
    value = event.target.value;
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    console.log(updatedFormElement.value);
    let ValidationResult = Validate(value, updatedFormElement.validationRules);
    console.log(ValidationResult);
    updatedFormElement.valid = ValidationResult.valid;
    if (!updatedFormElement.valid && updatedFormElement.touched) {
      updatedFormElement.errorMsg = ValidationResult.errorMsg;
    } else {
      updatedFormElement.errorMsg = "";
    }

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid,
    });
  };

  formSubmitHandler = () => {
    const formData = {};
    let authorized;
    for (let formElementId in this.state.formControls) {
      formData[formElementId] = this.state.formControls[formElementId].value;
    }

    if (
      formData.my_email === "sk@gmail.com" &&
      formData.my_password === "1234sk"
    ) {
      console.log("success");

      this.setState({ redirectToReferrer: true });
    } else {
      alert("please check your email or password");
    }
  };

  handleClearForm = () => {
    const initialState = {
      formIsValid: false,
      formControls: initialFormState,
    };

    this.setState(initialState);
  };
  render() {
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Admindashboard />;
      // this.props.history.push('/Admindashboard')
    }
    return (
      <div class="container-fluid image ">
        <div class=" container formwidth1  bg-white">
        <h1 class="text-center">Admin</h1>
          <Input
            inputType={"email"}
            title={"Email"}
            name={"my_email"}
            placeholder={this.state.formControls.my_email.placeholder}
            value={this.state.formControls.my_email.value}
            handleChange={this.changeHandler}
            touched={this.state.formControls.my_email.touched}
            valid={this.state.formControls.my_email.valid}
            errorMsg={this.state.formControls.my_email.errorMsg}
          />
          <Input
            inputType={"password"}
            title={"Password"}
            name={"my_password"}
            placeholder={this.state.formControls.my_password.placeholder}
            value={this.state.formControls.my_password.value}
            handleChange={this.changeHandler}
            touched={this.state.formControls.my_password.touched}
            valid={this.state.formControls.my_password.valid}
            errorMsg={this.state.formControls.my_password.errorMsg}
          />
          <Button
            action={this.formSubmitHandler}
            type={"primary"}
            title={"Submit"}
            disabled={!this.state.formIsValid}
          />{" "}
          {/*Submit */}
          <Button
            action={this.handleClearForm}
            type={"primary"}
            title={"Cancel"}
          />{" "}
          {/* Cancel the form */}
          {/* <p>
            To add new Admin ? <a href="#">Register</a>
          </p> */}
        </div>
      </div>
    );
  }
}
export default login;
