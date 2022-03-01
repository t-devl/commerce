import React from "react";
import Product from "../Product/Product";
import "./Products.css";

export default function Products({ products, addToBasket }) {
  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToBasket={addToBasket}
        ></Product>
      ))}
    </div>
  );
}
