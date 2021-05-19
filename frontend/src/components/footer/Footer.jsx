import React from "react";
import "./footer.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-body">
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <Link to="/">
                <img
                  src={logo}
                  width="150rem"
                  style={{ color: "#927953" }}
                  alt="logo"
                />
              </Link>
            </div>

            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <Link to="#">
                    <p className="menu-title">About us</p>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <p className="menu-title">Our Service</p>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <p className="menu-title">Privacy Policy</p>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <p className="menu-title">Contact Us</p>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <Link to="/products">
                    <p className="menu-title">All Products</p>
                  </Link>
                </li>
                <li>
                  <Link to={`/hoodies`}>
                    <p className="menu-title">Hoodies</p>
                  </Link>
                </li>
                <li>
                  <Link to={`/caps`}>
                    <p className="menu-title">Caps</p>
                  </Link>
                </li>
                <li>
                  <Link to={`/tshirts`}>
                    <p className="menu-title">T-shirt</p>
                  </Link>
                </li>
                <li>
                  <Link to={`/skateboards`}>
                    <p className="menu-title">Skateboard</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <span></span>

                <span>{/* <SiInstagram /> */}</span>
                <span></span>
              </div>
              <Link to="Login">
                <button className="singUp-btn">Log in</button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
