import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { commerce } from "./lib/commerce";
import Basket from "./components/Basket/Basket";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Confirmation from "./components/Confirmation/Confirmation";

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState({});

  useEffect(() => {
    getProducts();
    getBasket();
  }, []);

  function getProducts() {
    commerce.products.list().then((res) => setProducts(res.data));
  }

  function getBasket() {
    commerce.cart.retrieve().then((res) => setBasket(res));
  }

  function addToBasket(productId, quantity) {
    commerce.cart.add(productId, quantity).then((res) => setBasket(res.cart));
  }

  function updateBasketQuantity(lineItemId, quantity) {
    commerce.cart
      .update(lineItemId, { quantity: quantity })
      .then((res) => setBasket(res.cart));
  }

  function removeFromBasket(lineItemId) {
    commerce.cart.remove(lineItemId).then((res) => setBasket(res.cart));
  }

  function captureCheckout() {
    commerce.cart.refresh().then((res) => setBasket(res));
  }

  return (
    <Router>
      <div className="App">
        <Header basketQuantity={basket.total_items}></Header>
        <Routes>
          <Route
            path="/"
            element={<Products products={products} addToBasket={addToBasket} />}
          />
          <Route
            path="/basket"
            element={
              <Basket
                items={products}
                basket={basket}
                updateBasketQuantity={updateBasketQuantity}
                removeFromBasket={removeFromBasket}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout basket={basket} captureCheckout={captureCheckout} />
            }
          />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
