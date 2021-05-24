import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import loginIcon from "../assets/login.svg";
import cartIcon from "../assets/cart-icon.svg";
import "./nav.css";
import Hamburger from "../hamburger/Hamburger";

const Nav = () => {
  const { cart } = useSelector((state) => state.products);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => (count += item.qty));
    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <>
      <div className="hamburger">
        <Hamburger cartCount={cartCount} />
      </div>

      <div className="navbar-container">
        <div className="menu-wrapper">
          <Link to="/">
            <img className="logo" src={logo} width="130rem" alt="Logo" />
          </Link>
          <Link to="/products">
            <p className="menu-title btn-hover">All Products</p>
          </Link>
          <Link to={`/hoodies`}>
            <p className="menu-title btn-hover">Hoodies</p>
          </Link>
          <Link to={`/caps`}>
            <p className="menu-title btn-hover">Caps</p>
          </Link>
          <Link to={`/tshirts`}>
            <p className="menu-title btn-hover">T-shirt</p>
          </Link>
          <Link to={`/skateboards`}>
            <p className="menu-title btn-hover">Skateboard</p>
          </Link>
          <Link to={`/wheels`}>
            <p className="menu-title btn-hover">Wheels</p>
          </Link>
        </div>

        <div className="nav-icons-wrapper">
          <Link to={`/login`}>
            <img className="login-icon" src={loginIcon} alt="Login" />
          </Link>
          <div className="cart-wrapper">
            <Link to={`/cart`}>
              <p className="cart-icon-number">{cartCount}</p>
              <img className="cart-icon" src={cartIcon} alt="Cart" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
