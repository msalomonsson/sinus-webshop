import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "./hamburger.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import loginIcon from "../assets/login.svg";
import cartIcon from "../assets/cart-icon.svg";

const Hamburger = (props) => {
  const [isMenuOpen, handleMenu] = useState(false);

  const handleCloseMenu = (props) => {
    handleMenu(false);
  };
  const handleStateChange = (state) => {
    handleMenu(state.isOpen);
  };

  return (
    <div className="hamburger">
      <Menu
        width={280}
        disableCloseOnEsc
        isOpen={isMenuOpen}
        onStateChange={handleStateChange}
      >
        <div className="burger-items">
          <Link to="/" onClick={() => handleCloseMenu()}>
            <img className="logo" src={logo} width="150rem" alt="Logo" />
          </Link>
          <Link to="/products" onClick={() => handleCloseMenu()}>
            <p className="burger-link">All Products</p>
          </Link>
          <Link to={`/hoodies`} onClick={() => handleCloseMenu()}>
            <p className="burger-link">Hoodies</p>
          </Link>
          <Link to={`/caps`} onClick={() => handleCloseMenu()}>
            <p className="burger-link">Caps</p>
          </Link>
          <Link to={`/tshirts`} onClick={() => handleCloseMenu()}>
            <p className="burger-link">T-shirt</p>
          </Link>
          <Link to={`/skateboards`} onClick={() => handleCloseMenu()}>
            <p className="burger-link">Skateboard</p>
          </Link>
          <Link to={`/wheels`} onClick={() => handleCloseMenu()}>
            <p className="burger-link">Wheels</p>
          </Link>
        </div>

        <div className="burger-icons">
          <Link to={`/login`} onClick={() => handleCloseMenu()}>
            <img className="burger-icon" src={loginIcon} alt="Login" />
          </Link>
          <div className="burger-cart">
            <Link to={`/cart`} onClick={() => handleCloseMenu()}>
              <p className="burger-cart-number">{props.cartCount}</p>
              <img src={cartIcon} className="burger-icon" alt="burgerIcon" />
            </Link>
          </div>
        </div>
      </Menu>
      {/* <img className="login-icon" src={loginIcon} alt="Login" /> */}
      {/* <Link to={`/login`}></Link> */}
    </div>
  );
};

export default Hamburger;
