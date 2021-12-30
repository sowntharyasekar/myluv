import React from "react";
import "../background.css";
import Addform from "./Addform";
import Button from "../formcomponent/Button";
import Recipe from "./Recipe";
import axios from "axios";
import Myprofile from "./Myprofile";

class Setting extends React.Component {
  state = {
    recipes: [],
    id: "",
  };

  nextPath(path) {
    this.props.history.push(path);
  }

  componentDidMount() {
    Recipe.get("/recipe.json").then((res) => {
      const recipes = [];

      for (let key in res.data) {
        recipes.push({
          ...res.data[key],
        });
      }
      this.setState({ recipes: recipes });
      console.log(recipes);
    });
  }
  deleteRow(e) {
    if(window.confirm('Are you sure want to  all delete items')){
    Recipe.delete(`recipe.json`).then((res) => {
      console.log(res);
      console.log(res.data);
      window. location. reload() ;
      // const recipes = this.state.recipes.filter((item) => item.id !== id);
      // this.setState({ recipes });
    });
  }
  }

  render() {
    return (
      <div class="container">
        <div class="float-right">
          <button
            type="button"
            onClick={() => this.nextPath("/adminlogin/admin/Setting/Addform")}
            class="btn btn-dark"
          >
            Add
          </button>
        </div>
        <div class="float-left">
             <button type="button"  onClick={(e) => this.deleteRow(e)} class="btn btn-danger">Delete all</button>
             
             </div>
        <br />
        <br />
        <div class="row m-0">
          {this.state.recipes.map((recipe) => (
            <div class="col-md-6">
              <div class="card  shadow mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src={recipe.image}
                      class="img-fluid"
                      style={{ paddingTop: "20px" }}
                      alt="..."
                    ></img>
                  </div>
                  <div class="col-md-4">
                    <div class="card-body">
                      <h5 class="card-title">{recipe.name}</h5>
                      <p class="card-text font-weight-bold text-success">
                        Rs.{recipe.cost}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-body">
                      <p class="card-text font-italic">{recipe.type}</p>
                      
                      {/* <div class="float-right">
                        <button
                          type="button"
                          onClick={(e) => this.deleteRow(recipe.id, e)}
                          class="btn btn-danger"
                        >
                          delete
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    );
  }
}

export default Setting;
