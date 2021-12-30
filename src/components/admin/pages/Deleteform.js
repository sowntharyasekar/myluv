import React from "react";
import Recipe from "./Recipe";
class Deleteform extends React.Component{
    


    
    state = {
        id: '',
      }
    
      handleChange = event => {
        this.setState({ id: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    console.log(this.state.id)
        Recipe.delete(`/recipe/${this.state.id}.json`)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    
      render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Person ID:
                <input type="text" name="id" onChange={this.handleChange} />
              </label>
              <button type="submit">Delete</button>
            </form>
          </div>
        )
      }
    }
    export default Deleteform;