import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">Commerce</div>
      <button className="header__basket-button">
        <FontAwesomeIcon
          className="header__basket-icon"
          icon={faBasketShopping}
        />
        Basket
      </button>
    </header>
  );
}
