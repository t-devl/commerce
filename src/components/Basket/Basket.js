import React from "react";
import { Link } from "react-router-dom";
import "./Basket.css";

export default function Basket({
  basket,
  updateBasketQuantity,
  removeFromBasket,
}) {
  if (!basket.line_items) return "Loading...";

  return (
    <div className="basket">
      {!basket.line_items.length ? (
        <p>No items in basket</p>
      ) : (
        <>
          <div className="basket__header">
            <div className="basket__header-product">Product</div>
            <div className="basket__header-price">Price</div>
            <div className="basket__header-quantity">Quantity</div>
            <div className="basket__header-total">Total</div>
          </div>
          {basket.line_items.map((item) => (
            <div className="basket__row row" key={item.id}>
              <div className="row__product">
                <div className="row__image-container">
                  <img className="row__image" src={item.image.url}></img>
                </div>
                <div className="row__name">{item.name}</div>
              </div>

              <div className="row__price">
                {item.price.formatted_with_symbol}
              </div>
              <div className="row__quantity quantity">
                <button
                  className="quantity__button"
                  onClick={() =>
                    updateBasketQuantity(item.id, item.quantity - 1)
                  }
                >
                  -
                </button>
                <span className="quantity__value">{item.quantity}</span>
                <button
                  className="quantity__button"
                  onClick={() =>
                    updateBasketQuantity(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <div className="row__total">
                {item.line_total.formatted_with_symbol}
              </div>
              <div
                className="row__remove"
                onClick={() => removeFromBasket(item.id)}
              >
                <button className="row__remove-button">Remove</button>
              </div>
            </div>
          ))}
        </>
      )}
      <div className="basket__checkout">
        <div className="basket__subtotal">
          Subtotal:{" "}
          <span className="basket__subtotal-value">
            {basket.subtotal.formatted_with_symbol}
          </span>
        </div>
        <Link className="basket__checkout-button" to="/checkout">
          Checkout
        </Link>
      </div>
    </div>
  );
}
