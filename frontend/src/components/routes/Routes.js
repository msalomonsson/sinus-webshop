import React from "react";
import { Route, Switch } from "react-router";
import Category from "../category/Category";
import Home from "../home/Home";
import Product from "../product/Product";
import Products from "../products/Products";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/products">
        <Products />
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
