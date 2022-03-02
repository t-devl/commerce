import React from "react";
import { Link } from "react-router-dom";
import "./Confirmation.css";

export default function Confirmation() {
  return (
    <div className="confirmation">
      <p className="confirmation__message">Your order has been placed!</p>
      <Link className="confirmation__link" to="/">
        Return to shopping
      </Link>
    </div>
  );
}
