import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import background from "../assets/banner.png";
import square from "../assets/Square.svg";
import skateboard from "../assets/skateboard.svg";
import fil from "../assets/rightfil.svg";
import logo from "../assets/logo-one.svg";
import downfil from "../assets/down.svg";

const Home = () => {
  return (
    <div className="home-conatiner">
      <div
        className="showcase"
        style={{ backgroundImage: `url(${background})`, minHeight: "40rem" }}
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
      <div
        // style={{
        //   display: "flex",
        //   justifyContent: "center",

        //   maxWidth: "2rem",
        //   margin: "auto",
        // }}
        className={"logos"}
      >
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Home;
