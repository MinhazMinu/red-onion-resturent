import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Foods from "./Components/Foods/Foods";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
  Link
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";

import FoodDetails from "./Components/FoodDetails/FoodDetails";

function App() {
  const [cart, setCart] = useState([]);
  const [deliveryDetails, setDeliveryDetails] = useState({
    todoor: null,
    road: null,
    flat: null,
    businessname: null,
    address: null
  });
  const deliveryDetailsHandler = data => {
    setDeliveryDetails(data);
  };
  const clearCart = () => {
    setCart([]);
  };
  const cartHandler = data => {
    const alreadyAdded = cart.find(crt => crt.id == data.id);
    const newCart = [...cart, data];
    setCart(newCart);
    if (alreadyAdded) {
      const reamingCarts = cart.filter(crt => cart.id != data);
      setCart(reamingCarts);
    } else {
      const newCart = [...cart, data];
      setCart(newCart);
    }
  };
  return (
    <BrowserRouter>
      <div className="main">
        <Header cart={cart}></Header>

        <Switch>
          <Route exact path="/">
            <Banner></Banner>
            <Foods cart={cart}></Foods>
          </Route>
          <Route path="/food/:id">
            <FoodDetails cart={cart} cartHandler={cartHandler}></FoodDetails>
          </Route>
          <Route path="/login">
            <h1>Welcome to Login</h1>
          </Route>
          <Route path="*">
            <Link to="/">
              <div className="row justify-content-center my-5">
                <button className="btn btn-primary ">Back To Home</button>
              </div>
            </Link>
          </Route>
        </Switch>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
