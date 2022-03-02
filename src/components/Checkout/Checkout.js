import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import DeliveryForm from "../DeliveryForm/DeliveryForm";
import Payment from "../Payment/Payment";
import "./Checkout.css";

export default function Checkout({ basket, captureCheckout }) {
  const [step, setStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [deliveryData, setDeliveryData] = useState({});

  useEffect(() => {
    commerce.checkout
      .generateToken(basket.id, { type: "cart" })
      .then((res) => setCheckoutToken(res));
  }, [basket]);

  function handleDeliveryForm(data) {
    setDeliveryData(data);
    setStep(step + 1);
  }

  function previousStep() {
    if (step !== 0) {
      setStep(step - 1);
    }
  }

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
      <div className="checkout__body">
        {checkoutToken ? (
          step === 0 ? (
            <DeliveryForm
              checkoutToken={checkoutToken}
              handleDeliveryForm={handleDeliveryForm}
            ></DeliveryForm>
          ) : (
            <Payment
              checkoutToken={checkoutToken}
              deliveryData={deliveryData}
              captureCheckout={captureCheckout}
              previousStep={previousStep}
            ></Payment>
          )
        ) : null}
      </div>
    </div>
  );
}
