import React from "react";
import DeliveryForm from "../DeliveryForm/DeliveryForm";
import "./Checkout.css";

export default function Checkout() {
  return (
    <div className="checkout">
      <h1 className="checkout__title">Checkout</h1>
      <div className="checkout__stepper">
        <div className="checkout__step">
          <div className="checkout__step-number checkout__step-number--active">
            1
          </div>
          <div className="checkout__step-name">Delivery address</div>
        </div>
        <div className="checkout__step-bar"></div>
        <div className="checkout__step">
          <div className="checkout__step-number">2</div>
          <div className="checkout__step-name">Payment method</div>
        </div>
      </div>
      <DeliveryForm></DeliveryForm>
    </div>
  );
}
