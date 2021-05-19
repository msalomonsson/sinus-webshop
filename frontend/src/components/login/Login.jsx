import "./login.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import db from "../../firebase/db";
import { changeSignIn, getUserInfo } from "../profile/profileSlice";

function Login() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const logInUser = (e) => {
    e.preventDefault();
    db.auth()
      .signInWithEmailAndPassword(login, password)
      .then((user) => {
        dispatch(getUserInfo(user.user.uid));
        dispatch(changeSignIn(true));
      });
  };
  return (
    <div className="Log-in">
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            defaultChecked
          />
          <label htmlFor="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>
          <div className="login-form">
            <form className="sign-in-htm" onSubmit={logInUser}>
              <div className="group">
                <label htmlFor="user" className="label">
                  Username
                </label>
                <input
                  type="text"
                  className="input"
                  onChange={(e) => {
                    setLogin(e.target.value);
                  }}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <div className="group">
                <input
                  type="submit"
                  className="button btn-sigIn"
                  value="Sign In"
                  onClick={(e) => {
                    logInUser(e);
                  }}
                />
              </div>
              <div className="hr"></div>
            </form>
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Username
                </label>
                <input type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input type="password" className="input" datatype="password" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Repeat Password
                </label>
                <input type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Email Address
                </label>
                <input type="text" className="input" />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign Up" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <label htmlFor="tab-1">
                  Are you already member?Log in here
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
