import React, { useState } from "react";
import { Switch,Route } from "react-router";
import { logout, selectUser } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Mycart from "./Mycart";
import Aboutus from "./Aboutus";
import Home from "./Home";
import "../admin/background.css";
import { withTranslation} from 'react-i18next';
import { useTranslation } from 'react-i18next';


const Logout = () => {
//   console.log(props)
//   const {i18n } = props;
//   console.log(i18n)
//   const { t } = props

// const changeLanguage = lng => {
//   i18n.changeLanguage(lng);
// };
const { t, i18n } = useTranslation();
  const [cartItems,setCartItems]= useState([])
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleAddProducts=(post)=>{
    console.log("hello")
    const productExist=cartItems.find((item)=>item.id===post.id);
    if(productExist){
      setCartItems(cartItems.map((item)=>item.id===post.id ?
       {...productExist,quantity:productExist.quantity+1}:item));
    }
    else
    {
      setCartItems([...cartItems,{...post,quantity:1}]);
    }
  }
  const handleRemoveProducts=(post)=>{
    const productExist=cartItems.find((item)=>item.id===post.id);
    if(productExist.quantity===1){
      setCartItems(cartItems.filter((item)=>item.id!==post.id))
    }
    else{
      setCartItems(
        cartItems.map((item)=>item.id===post.id ? {...productExist,quantity:productExist.quantity-1}:item)
      )
    }

  }
  const handleCartClearance=()=>{
    setCartItems([]);
  }
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };
 const changeLanguage=(ln)=>{
   return()=>{
     console.log("Language changed");
     i18n.changeLanguage(ln);
   }
 }
  
  return (
    
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand font-italic" href="#">
         {t('Welcome to FoodZone!')} <span class="text-success font-weight-bold">{user.name}</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto pl-3">
          <Link exact to="/">
            <li class="nav-item active">
              <a class="nav-link" href="#">
              {t('home')} <span class="sr-only">(current)</span> 
              </a>
            </li>
            </Link>
            <Link to="/mycart">
            <li class="nav-item">
              
              <a class="nav-link" href="#">
                {t('Mycart')} 
              </a>
              
            </li>
            </Link>
            <span class="cart-Le text-success">{cartItems.length===0?"":cartItems.length}</span>
            <Link to="/Aboutus">
            <li class="nav-item">
              
              <a class="nav-link" href="#">
              {t('About us')}
              </a>
            </li>
           </Link>
          
              
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              
              onClick={ changeLanguage('en')}
            >
               English
            </button>
            <button
              class="btn btn-outline-success my-2 my-sm-0"
             
              onClick={ changeLanguage('tn')}
            >
               தமிழ்
            </button>
            
          </ul>
          <form class="form-inline my-2 my-lg-0">
          {/* <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('fr')}>tamil</button> */}
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={(e) => handleLogout(e)}
            >
              {t('Logout')}
            </button>
          </form>
        </div>
      </nav>
      <div class="container pt-3">
        
      <Switch>
      <Route exact path="/mycart"><Mycart cartItems={cartItems} handleAddProducts={handleAddProducts} handleRemoveProducts={handleRemoveProducts} handleCartClearance={handleCartClearance}/></Route>
      <Route exact path="/Aboutus" component={Aboutus} />
      <Route exact path="/" ><Home handleAddProducts={handleAddProducts} cartItems={cartItems}></Home></Route>
      </Switch>
      </div>
    </div>
   
    
  );
};
export default  Logout;
