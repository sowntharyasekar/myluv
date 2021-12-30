import React from "react";
import Clock from "./Clock";
import "../background.css";
import Adminuser from "./Adminuser";
import Recipe from "./Recipe";
import orders from "../../user/orders";
class Myprofile extends React.Component {
  constructor(){
    super();
    this.state={
      totalrecipe:"",
      totalorders:"",
      totalemployee:"",
      emp:[]
    }
    
  }
  componentDidMount(){
    Adminuser.get("/user.json").then((res) => {
      const emp = [];

      for (let key in res.data) {
       emp.push({
          ...res.data[key],
        });
      }
      this.setState({ emp: emp });
      this.setState({ totalemployee: emp.length });
    });
    Recipe.get("/recipe.json").then((res) => {
      const persons = [];

      for (let key in res.data) {
        persons.push({
          ...res.data[key],
        });
      }
      this.setState({ totalrecipe: persons.length });
    });
    orders.get("/orders.json").then((res) => {
      const persons = [];
      let personss ='';
      for (let key in res.data) {
        persons.push({
          ...res.data[key],
        });

      
        

      }
      
      personss =persons.length;
      console.log(personss);
      this.setState({ totalorders: personss });
    });

  }
  render() {
    return (
      <div class="Container">
        <div class="float-right border border-dark text-dark shadow  bg-white p-2">
          <h4>
            {" "}
            <Clock />
          </h4>
        </div>
        <h1 class="text-center font-italic text-dark">
          Welcome To Food FoodZone!
        </h1>

        <div class="row p-5">
          <div class="col-sm-4">
            <div class="card bg-dark shadow ">
              <div class="card-body text-white">
                <h5 class="card-title text-center">Total Employee</h5>
                <p class="card-text text-center">
                {this.state.totalemployee}
                </p>
                
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card  bg-dark shadow">
              <div class="card-body text-white">
                <h5 class="card-title text-center">Total Recipe</h5>
                <p class="card-text text-center">
                {this.state.totalrecipe}
                </p>
                
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card  bg-dark shadow">
              <div class="card-body text-white">
                <h5 class="card-title text-center">Total Orders</h5>
                <p class="card-text text-center">
                {this.state.totalorders}
                </p>
                
              </div>
            </div>
          </div>
          <div class="col-sm-12 pt-5">
            <div class="card  bg-dark shadow pt-5" style={{height:"fit-content"}}>
              <div class="card-body text-dark text-center">
                <h5 class="card-title text-center">Employees</h5>
                <p class="card-text">
                <div class="container">
           <table class="table table-light table-striped center">
          <thead>
              <tr>              <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">TYPE</th>
               <th scope="col">CATEGORY</th>
             </tr>
          </thead>         <tbody>
              {this.state.emp.map((person) => (
                <tr>
                  <td>{person.id}</td>
                  <td>{person.name}</td>
                  <td>{person.type}</td>
                  <td>{person.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Myprofile;
