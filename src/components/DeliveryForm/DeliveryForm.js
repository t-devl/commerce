import React from "react";
import { Link } from "react-router-dom";
import "./DeliveryForm.css";

export default function DeliveryForm() {
  return (
    <div className="delivery">
      <h2 className="delivery__title">Delivery Address</h2>
      <form className="delivery__form form">
        <div className="form__group">
          <label className="form__label" htmlFor="firstName">
            Full name
          </label>
          <input
            className="form__input"
            id="fullName"
            name="fullName"
            type="text"
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="address-line1">
            Address line 1
          </label>
          <input
            className="form__input"
            id="address-line1"
            name="address-line1"
            type="text"
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="address-line2">
            Address line 2
          </label>
          <input
            className="form__input"
            id="address-line2"
            name="address-line2"
            type="text"
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="address-level-1">
            Town/City
          </label>
          <input
            className="form__input form__input--town"
            id="address-level-1"
            name="address-level-1"
            type="text"
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="postcode">
            Postcode
          </label>
          <input
            className="form__input form__input--postcode"
            id="postcode"
            name="postcode"
            type="text"
          />
        </div>
        <div className="form__buttons-container">
          <Link className="form__button form__button--back" to="/basket">
            Back
          </Link>
          <Link className="form__button form__button--next" to="/">
            Next
          </Link>
        </div>
      </form>
    </div>
  );
}
