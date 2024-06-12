import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./Cart" element={<Cart />} />
        <Route path="./PlaceOrder" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
