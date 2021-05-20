import React from "react";
import "./footer.css";
import logo from "../assets/logo.svg";
import facebookicon from "../assets/facebookIcon.svg";
import instagramicon from "../assets/instagramIcon.svg";
import twittericon from "../assets/twitterIcon.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import db from "../../firebase/db";
import { changeSignIn } from "../profile/profileSlice";

function Footer() {
  const { isSignIn } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    db.auth()
      .signOut()
      .then(() => {
        dispatch(changeSignIn(false));
        console.log("log out");
      });
  };

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
                    <p className="footer-title">About us</p>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <p className="footer-title">Our Service</p>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <p className="footer-title">Privacy Policy</p>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <p className="footer-title">Contact Us</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <Link to="/products">
                    <p className="footer-title">All Products</p>
                  </Link>
                </li>
                <li>
                  <Link to={`/hoodies`}>
                    <p className="footer-title">Hoodies</p>
                  </Link>
                </li>
                <li>
                  <Link to={`/caps`}>
                    <p className="footer-title">Caps</p>
                  </Link>
                </li>
                <li>
                  <Link to={`/tshirts`}>
                    <p className="footer-title">T-shirt</p>
                  </Link>
                </li>
                <li>
                  <Link to={`/skateboards`}>
                    <p className="footer-title">Skateboard</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <span>
                  <img src={facebookicon} alt="" />
                </span>
                <span>
                  <img src={instagramicon} alt="" />
                </span>
                <span>
                  <img src={twittericon} alt="" />
                </span>
              </div>
              {!isSignIn ? (
                <Link to="Login">
                  <button className="singUp-btn">Log in</button>
                </Link>
              ) : (
                <Link to="Login">
                  <button className="singUp-btn" onClick={handleSignOut}>
                    Log out
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
