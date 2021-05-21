import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "./components/products/productSlice";
import "./App.css";
import Router from "./components/routes/Routes";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";

const App = () => {
  const dispath = useDispatch();

  useEffect(() => {
    axios.get("/products").then((res) => {
      dispath(setProducts(res.data));
    });
  }, [dispath]);

  return (
    <div id="page-container">
      <div id="navbar-container">
        <Nav />
      </div>
      <div id="content-wrap">
        <Router />
      </div>
      <div id="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default App;
