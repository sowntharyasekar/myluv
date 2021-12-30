import React from "react";
import { selectUser } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import orders from "./orders";
import { useTranslation } from 'react-i18next';

const Mycart = ({
  cartItems,
  handleAddProducts,
  handleRemoveProducts,
  handleCartClearance,
}) => {
  const { t, i18n } = useTranslation();
    const user = useSelector(selectUser);
  const totalPrice = cartItems.reduce(
    (cost, item) => cost + item.quantity * item.cost,
    0
  );
  const handlesubmit=(() => {

    orders.post("/orders.json",cartItems).then(response=>{
        console.log(response);
        alert("your order is confirmed");
        handleCartClearance();
        
      })
  });
  return (
    <div class="card shadow ">
      <h3 class="card-header text-center text-success font-italic bg-dark">
     {user.name} {t('Cart')}
      </h3>
      <div class="pl-2 pt-2">
        {cartItems.length >= 1 && (
          <button
            onClick={() => handleCartClearance()}
            class="btn btn-dark float-left"
          >
            {t('clear')}
          </button>
        )}
      </div>
      {cartItems.length === 0 && (
        <div class="card-body">
          <h3 class="card-title text-center text-danger">
            {t('PleaseSelectItems')}!
          </h3>
        </div>
      )}

      
         <div class="row m-0 pt-3">
          {cartItems.map((item) => (
            <div class="col-md-12">
              <div class="card  shadow mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src={item.image}
                      class="img-fluid"
                      style={{ height:"150px" }}
                      alt="..."
                      
                    ></img>
                  </div>
                  <div class="col-md-3">
                    <div class="card-body">
                      <h5 class="card-title">{item.name}</h5>
                      <p class="card-text font-italic">{item.type}</p>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card-body">
                      
                      <p class="card-text font-weight-bold text-success">
                      <h5 class="card-title text-dark">{t('Cost per item')}</h5>
                       {t('Rs')}.{item.cost}
                      </p>
                      </div>
                      </div>
                      <div class="col-md-2">
                    <div class="card-body">
                      <div class="float-right">
                      <button onClick={() => handleAddProducts(item)} class="btn btn-dark">+</button>
                  <span class="font-weight-bold text-danger">{item.quantity}</span>
                  <button onClick={() => handleRemoveProducts(item)}class="btn btn-dark">-</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="text-center card-footer text-white font-italic bg-dark">
          {t('Total Price')}
          <h2>{t('Rs')}.{totalPrice} </h2>
          <button onClick={() => handlesubmit()} class="btn btn-success float-right">{t('confirm')}</button>
        </div>
      
    </div>
  );
};
export default Mycart;
