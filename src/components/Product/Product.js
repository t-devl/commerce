import React from "react";
import "./Product.css";

export default function Product({ product }) {
  return (
    <div className="product">
      <div className="product__image-container">
        <img className="product__image" src={product.image.url}></img>
      </div>
      <div className="product__body">
        <h2 className="product__name">{product.name}</h2>
        <p
          className="product__description"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></p>
        <button className="product__button">Add to basket</button>
      </div>
    </div>
  );
}
