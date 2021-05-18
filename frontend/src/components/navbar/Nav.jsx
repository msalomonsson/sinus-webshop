import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
const Nav = () => {
  const { isSignIn } = useSelector((state) => state.profile);
  return (
    <div>
      <img src={logo} width="150rem" alt="" />
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/products">
        <button>Products</button>
      </Link>
      <Link to={`/hoodies`}>
        <button>Hoodies</button>
      </Link>
      <Link to={`/caps`}>
        <button>Caps</button>
      </Link>
      <Link to={`/tshirts`}>
        <button>Tshirt</button>
      </Link>
      <Link to={`/skateboards`}>
        <button>Skateboard</button>
      </Link>
      <Link to={`/wheels`}>
        <button>Wheels</button>
      </Link>
      <Link to="/login">
        <button>{isSignIn ? "Profile" : "Login"}</button>
      </Link>
    </div>
  );
};

export default Nav;
