import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header({ basketQuantity }) {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <div className="header__logo">Commerce</div>
      </Link>
      <Link className="header__basket-button" to="/basket">
        <FontAwesomeIcon
          className="header__basket-icon"
          icon={faBasketShopping}
        />
        Basket
        {basketQuantity ? (
          <span className="header__basket-quantity">{basketQuantity}</span>
        ) : null}
      </Link>
    </header>
  );
}
