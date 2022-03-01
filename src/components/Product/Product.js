import React from "react";
import "./Product.css";

export default function Product({ product, addToBasket }) {
  return (
    <div className="product">
      <div className="product__image-container">
        <img className="product__image" src={product.image.url}></img>
      </div>
      <div className="product__body">
        <div className="product__price">
          {product.price.formatted_with_symbol}
        </div>
        <h2 className="product__name">{product.name}</h2>
        <p
          className="product__description"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></p>
        <button
          className="product__button"
          onClick={() => addToBasket(product.id, 1)}
        >
          Add to basket
        </button>
      </div>
    </div>
  );
}
