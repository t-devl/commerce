import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DeliveryForm.css";
import { commerce } from "../../lib/commerce";

export default function DeliveryForm({ checkoutToken, handleDeliveryForm }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [postcode, setPostcode] = useState("");
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  useEffect(() => {
    getShippingCountries(checkoutToken.id);
  }, []);

  function getShippingCountries(checkoutTokenId) {
    commerce.services
      .localeListShippingCountries(checkoutTokenId)
      .then((res) => {
        setShippingCountries(res.countries);
        setShippingCountry(Object.keys(res.countries)[0]);
      });
  }

  useEffect(() => {
    getShippingSubdivisions(checkoutToken.id, shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    getShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision]);

  function getShippingSubdivisions(checkoutTokenId, countryCode) {
    commerce.services
      .localeListShippingSubdivisions(checkoutTokenId, countryCode)
      .then((res) => {
        setShippingSubdivisions(res.subdivisions);
        setShippingSubdivision(Object.keys(res.subdivisions)[0]);
      });
  }

  function getShippingOptions(checkoutTokenId, country, region = null) {
    commerce.checkout
      .getShippingOptions(checkoutTokenId, { country, region })
      .then((res) => {
        setShippingOptions(res);
        setShippingOption(res[0].id);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      addressLine1,
      addressLine2,
      shippingSubdivision,
      postcode,
      shippingCountry,
      shippingOption,
    };

    handleDeliveryForm(data);
  }

  return (
    <div className="delivery">
      <h2 className="delivery__title">Delivery Address</h2>
      <form className="delivery__form form" onSubmit={handleSubmit}>
        <div className="form__grid">
          <div className="form__group form__group--first-name">
            <label className="form__label" htmlFor="firstName">
              First name
            </label>
            <input
              className="form__input"
              id="firstName"
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form__group form__group--last-name">
            <label className="form__label" htmlFor="lastName">
              Last name
            </label>
            <input
              className="form__input"
              id="lastName"
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email
            </label>
            <input
              className="form__input"
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              required
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
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
              required
            />
          </div>
          <div className="form__group form__group--subdivision">
            <label className="form__label" htmlFor="address-level-1">
              Town/City
            </label>
            <select
              className="form__select"
              value={shippingSubdivision}
              onChange={(e) => setShippingSubdivision(e.target.value)}
            >
              {Object.entries(shippingSubdivisions).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="form__group form__group--postcode">
            <label className="form__label" htmlFor="postcode">
              Postcode
            </label>
            <input
              className="form__input"
              id="postcode"
              name="postcode"
              type="text"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              required
            />
          </div>
          <div className="form__group">
            <label className="form__label">Country</label>
            <select
              className="form__select"
              value={shippingCountry}
              onChange={(e) => setShippingCountry(e.target.value)}
            >
              {Object.entries(shippingCountries).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form__buttons-container">
          <Link className="form__button form__button--back" to="/basket">
            Back
          </Link>
          <button className="form__button form__button--next" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
