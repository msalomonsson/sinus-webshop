import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import background from "../assets/banner.png";
import square from "../assets/Square.svg";
import skateboard from "../assets/skateboard.svg";
import fil from "../assets/rightfil.svg";
import logo from "../assets/logo-one.svg";
import downfil from "../assets/down.svg";
import hoodieAsh from "../assets/hoodie-ocean.png";
import capBlue from "../assets/sinus-cap-blue.png";
import skate from "../assets/sinus-skateboard-organic.png";

const Home = () => {
  return (
    <div className="home-conatiner">
      <div
        className="showcase"
        style={{ backgroundImage: `url(${background})`, minHeight: "45rem" }}
      >
        <div className="showcae-content">
          <div className="left-content">
            <div className="circle">
              <img
                src={logo}
                alt="logo"
                className="logo-two"
                style={{ height: "4.5rem" }}
              />
              <div className="circle-text">
                <p className="left-content-text">NEW</p>
                <p className="left-content-text">SKATE DESIGN</p>
                <p className="p-text">New trend for summer</p>
              </div>
              <Link to={`/skateboards`}>
                <img
                  src={fil}
                  alt="rightfil"
                  className="rightfil"
                  style={{ height: "2rem" }}
                />
              </Link>
              <Link to={`/skateboards`}>
                <img
                  src={downfil}
                  alt="downfil"
                  className="down-fil"
                  style={{ height: "2.5rem" }}
                />
              </Link>
            </div>
          </div>
          <div className="right-content">
            <div className="img-content">
              <img className="square" src={square} alt="square" />
              <Link to={`/skateboards`}>
                <img className="skateboard" src={skateboard} alt="skatebord" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-row">
        <div className="line-left"></div>
        <div className="text-line">
          <p className="home-line-text">New Trend</p>
        </div>
        <div className="line-right"></div>
      </div>
      <div className="photo-container">
        <div className="trend-cap product">
          <img className="cap-foto" src={capBlue} alt="cap" />
        </div>
        <div className="trend-foto product">
          <img className="skate-foto" src={skate} alt="skate" />
        </div>
        <div className="trend-foto product">
          <img className="hoodie-foto" src={hoodieAsh} alt="hoodie" />
        </div>
      </div>
    </div>
  );
};

export default Home;
