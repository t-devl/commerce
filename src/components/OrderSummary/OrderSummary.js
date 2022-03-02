import React from "react";
import "./OrderSummary.css";

export default function OrderSummary({ checkoutToken }) {
  return (
    <div className="order-summary">
      <h2 className="order-summary__title">Order Summary</h2>
      {checkoutToken.live.line_items.map((item) => (
        <div className="order-summary__item item">
          <div className="item__info">
            <span className="item__name">{item.name}</span>
            <p className="item__quantity">Quantity: {item.quantity}</p>
          </div>
          <div className="item__price">
            {item.line_total.formatted_with_symbol}
          </div>
        </div>
      ))}
      <div className="order-summary__total">
        Total{" "}
        <span className="order-summary__total-price">
          {checkoutToken.live.subtotal.formatted_with_symbol}
        </span>
      </div>
    </div>
  );
}
