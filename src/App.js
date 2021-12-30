import React ,{Suspense}from "react";
import Login from "./components/admin/login";
import Admindashboard from "./components/admin/admindashboard";
import Myprofile from "./components/admin/pages/Myprofile";
import Orders from "./components/admin/pages/Orders";
import CustomerReview from "./components/admin/pages/Empadd";
import Setting from "./components/admin/pages/Setting";
import Userlogin from "./components/user/Userlogin";
import { useState } from "react";
import Mycart from "./components/user/Mycart";
import {
  Route,
  NavLink,
  Switch,
  Redirect,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
import Addform from "./components/admin/pages/Addform";
import Logout from "./components/user/Logout";

import { useTranslation } from 'react-i18next';

import { I18nextProvider } from 'react-i18next';

const App =()=> {
  const { t, i18n } = useTranslation();
    return (
      <div>
        <Switch>
      {/* <Suspense fallback="loading">  */}
          {/* <Route path="/user" component={User} /> */}
          <Route path="/adminlogin/admin" component={Admindashboard} />
          <Route path="/adminlogin" component={Login} />
          {/* <I18nextProvider i18n={i18n}> */}
    {/* <Suspense fallback="loading"> */}
          <Route exact path="/login" component={Logout}  />
           {/* </Suspense> */}
    {/* </I18nextProvider> */}
          <Route path="/" component={Userlogin} />
          {/* </Suspense> */}
        </Switch>
         
        {/* <Login /> */}
      </div>
    );
  
}

export default App;
