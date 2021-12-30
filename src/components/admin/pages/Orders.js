import React from "react";
import Adminuser from "./Adminuser";
import orders from "../../user/orders";


class Orders extends React.Component {
  state = {
    persons: [],
   total:0
  };
 

  
  mul(a,h){
const s = a*h;

return s;



  }
  
  componentDidMount() {
    orders.get("/orders.json").then((res) => {
      const persons = [];
      
      for (let key in res.data) {
        persons.push({
          ...res.data[key],
        });

   
        

      }


      this.setState({ persons: persons });
     
    });
  }

  render() {
    return (
      <div>
        <h1 class="text-center font-italic text-dark">Your orders</h1>
        <div class="container">
          <table class="table table-dark table-striped center">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Type</th>
                <th scope="col">Cost Per Item</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              
              {this.state.persons.map((person,key) => (
                <tr key={person.id}>
                  {/* {person.key.map((p, id) => ())} */}
                    <>
                      <td>{person[key].name}</td>
                      <td>{person[key].quantity}</td>
                      <td>{person[key].type}</td>
                      <td>{person[key].cost}</td>
                      <td>{this.mul(person[key].quantity,person[key].cost)}</td>
                    </>
                  
                </tr>
                
              ))}
            </tbody>
          </table>
         
        </div>
      </div>
    );
  }
}

export default Orders;
