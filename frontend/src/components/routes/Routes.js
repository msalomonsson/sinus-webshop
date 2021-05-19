import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import Cart from "../cart/Cart";
import Category from "../category/Category";
import Home from "../home/Home";
import Login from "../login/Login";
import Product from "../product/Product";
import Products from "../products/Products";
import Profile from "../profile/Profile";

const Router = () => {
  const { isSignIn } = useSelector((state) => state.profile);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route
        path="/login"
        render={isSignIn ? () => <Profile /> : () => <Login />}
      ></Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/product/:category/:id">
        <Product />
      </Route>
      <Route path="/:category">
        <Category />
      </Route>
    </Switch>
  );
};

export default Router;
