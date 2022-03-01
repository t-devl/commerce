import Commerce from "@chec/commerce.js";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Basket from "./components/Basket/Basket";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);

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
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
