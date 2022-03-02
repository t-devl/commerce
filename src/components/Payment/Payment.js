import React from "react";
import "./Payment.css";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import OrderSummary from "../OrderSummary/OrderSummary";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

export default function Payment({
  checkoutToken,
  deliveryData,
  captureCheckout,
  previousStep,
}) {
  const history = useNavigate();

  function handleSubmit(e, elements, stripe) {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    stripe
      .createPaymentMethod({ type: "card", card: cardElement })
      .then((res) => {
        if (res.error) {
          console.log(res.error);
        } else {
          const orderData = {
            lines_items: checkoutToken.live.line_items,
            customer: {
              firstname: deliveryData.firstName,
              lastname: deliveryData.lastName,
              email: deliveryData.email,
            },
            shipping: {
              name: "Primary",
              street: deliveryData.addressLine1,
              town_city: deliveryData.addressLine2,
              county_state: deliveryData.shippingSubdivision,
              postal_zip_code: deliveryData.postcode,
              country: deliveryData.shippingCountry,
            },
            fulfillment: {
              shipping_method: deliveryData.shippingOption,
            },
            payment: {
              gateway: "stripe",
              stripe: {
                payment_method_id: res.paymentMethod.id,
              },
            },
          };

          captureCheckout(checkoutToken.id, orderData);
          previousStep();
          history("/confirmation");
        }
      });
  }

  return (
    <div className="payment">
      <OrderSummary checkoutToken={checkoutToken}></OrderSummary>
      <h2 className="payment__title">Payment Method</h2>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form
              className="payment__form form"
              onSubmit={(e) => handleSubmit(e, elements, stripe)}
            >
              <CardElement className="form__payment-card"></CardElement>
              <div className="form__buttons-container">
                <button
                  className="form__button form__button--back"
                  onClick={previousStep}
                >
                  Back
                </button>
                <button
                  className="form__button form__button--next"
                  type="submit"
                >
                  Place Order
                </button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  );
}
