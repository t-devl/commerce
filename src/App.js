import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  const [products, setProducts] = useState([
    {
      id: "prod_31q0o3eqD1lDdj",
      name: "Lenovo IdeaPad 1i 14 Inch HD Laptop",
      description:
        "<p>Intel Celeron N4020, 4 GB RAM, 64 GB eMMC, Windows 10 Home S Mode</p>",
      price: {
        formatted_with_symbol: "£169.00",
      },
      image: {
        url: "https://cdn.chec.io/merchants/40407/assets/UpyDAtlkYYlHCsxL|71K+eDvkq2L._AC_SL1500_.jpg",
      },
    },
    {
      id: "prod_N7GKwbB0yMw3EX",
      name: "Acer Swift 1 SF114-33 14 inch Laptop",
      description:
        "<p>Intel Pentium N6000, 4GB RAM, 128GB SSD, Full HD Display, Windows 10 in S Mode</p>",
      price: {
        formatted_with_symbol: "£279.99",
      },
      image: {
        url: "https://cdn.chec.io/merchants/40407/assets/ntRcmSgS1RFds9nI|71O3QVJEEQL._AC_SL1500_.jpg",
      },
    },
    {
      id: "prod_aZWNoyv9yz580J",
      name: "Samsung Galaxy Tab S6 Lite Wi-Fi",
      description: "<p>Oxford Grey (UK Version)</p>",
      price: {
        formatted_with_symbol: "£299.00",
      },
      image: {
        url: "https://cdn.chec.io/merchants/40407/assets/Eua1al1GSWYOjXkN|719Aj13nVFL._AC_SL1500_.jpg",
      },
    },
    {
      id: "prod_BkyN5YAB2R50b6",
      name: "Cambridge Audio Melomania Touch Wireless Earbuds",
      description:
        "<p>50 Hours Battery Life, Bluetooth 5.0 In-Ear Headphones With Mic, Clear Voice Calling, Water-Resistant, 7mm Graphene Enhanced Drivers</p>",
      price: {
        formatted_with_symbol: "£79.95",
      },
      image: {
        url: "https://cdn.chec.io/merchants/40407/assets/LbMkExgIKiY58neM|81PY20NR55L._AC_SL1500_.jpg",
      },
    },
    {
      id: "prod_31q0o3eqQ8lDdj",
      name: "Samsung Galaxy A52s 5G Smartphone",
      description:
        "<p>Dual SIM Android Mobile Phone 6 GB RAM 128 GB Memory Awesome Mint (UK Version)</p>",
      price: {
        formatted_with_symbol: "£282.33",
      },
      image: {
        url: "https://cdn.chec.io/merchants/40407/assets/Kiv7NATAEVBNu2hh|51OUMaWBSdL._AC_SL1000_.jpg",
      },
    },
  ]);

  return (
    <div className="App">
      <Header></Header>
      <Products products={products}></Products>
    </div>
  );
}

export default App;
