import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import login from "./login";
import "./sidebar.css";
import Myprofile from "./pages/Myprofile";
import Orders from "./pages/Orders";
import Empadd  from "./pages/Empadd";
import Setting from "./pages/Setting";
import Addform from "./pages/Addform";
import Deleteform from "./pages/Deleteform";

class admindashboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {/* <Router> */}
          <div class="sidenav  bg-light">
            <p class="navbar-brand pl-5">FoodZone</p>

            <a href="">
              {" "}
              <Link to="/adminlogin/admin/Myprofile">
                <i class="fa fa-fw fa-home pt-2"></i>MyDashboard
              </Link>
            </a>
            <a href="">
              {" "}
              <Link to="/adminlogin/admin/Orders">
                <i class="fa fa-fw fa-envelope pt-2"></i>Orders
              </Link>
            </a>
            <a href="">
              {" "}
              <Link to="/adminlogin/admin/Addemployee">
                <i class="fa fa-fw fa-user pt-2"></i>Add Employee
              </Link>
            </a>
            <a href="">
              {" "}
              <Link to="/adminlogin/admin/Setting">
                <i class="fa fa-fw fa-wrench pt-2"></i>Recipes
              </Link>
            </a>
          </div>

          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand"></a>
              <form class="d-flex">
                <button class="btn btn-outline-dark" type="submit">
                  Logout
                </button>
              </form>
            </div>
          </nav>
          <div class="container-fluid" style={{ flex: 1, padding: "20px", paddingLeft: "200px"  }}>
            <Switch>
              <Route path="/adminlogin/admin/Myprofile" component={Myprofile} />
              <Route path="/adminlogin/admin/Orders" component={Orders} />
              <Route path="/adminlogin/admin/Addemployee" component={Empadd} />
              
              <Route path="/adminlogin/admin/Setting/Addform" component={Addform} />
              <Route path="/adminlogin/admin/Setting" component={Setting} />
            </Switch>
          </div>
        {/* </Router> */}
      </div>
    );
  }
}

export default admindashboard;
