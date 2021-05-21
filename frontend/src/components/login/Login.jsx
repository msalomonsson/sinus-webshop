import "./login.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import db from "../../firebase/db";
import { changeSignIn, createUser, getUserInfo } from "../profile/profileSlice";
import {
  validateSignInEmail,
  validateSignInPassword,
} from "../../validation/validation";
import { Link } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [signUser, setSignUser] = useState({});
  const [error, setError] = useState({ error: Boolean, errorMsg: "" });

  const dispatch = useDispatch();

  const logInUser = (e) => {
    e.preventDefault();
    db.auth()
      .signInWithEmailAndPassword(login, password)
      .then((user) => {
        if (
          (validateSignInEmail(login) && validateSignInPassword(password)) ===
          true
        ) {
          dispatch(getUserInfo(user.user.uid));
          dispatch(changeSignIn(true));
        }
      })
      .catch((err) => {
        setError({ ...error, error: true, errorMsg: err.message });
      });
  };

  const signUpUser = (e) => {
    e.preventDefault();
    if (signUser.password === signUser.repeatPassword) {
      db.auth()
        .createUserWithEmailAndPassword(signUser.email, signUser.password)
        .then((user) => {
          if (
            (validateSignInEmail(signUser.email) &&
              validateSignInPassword(signUser.password)) === true
          ) {
            dispatch(createUser(user.user.uid));
            dispatch(getUserInfo(user.user.uid));
            dispatch(changeSignIn(true));
          }
        })
        .catch((err) => {
          setError({ ...error, error: true, errorMsg: err.message });
        });
    } else {
      setError({ ...error, error: true, errorMsg: "Passwords dont match" });
    }
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
            onClick={() => {
              setError({ ...error, error: false });
            }}
          />
          <label
            htmlFor="tab-1"
            className="tab"
            style={{ marginBottom: "2rem" }}
          >
            Sign In
          </label>
          <input
            id="tab-2"
            type="radio"
            name="tab"
            className="sign-up"
            onClick={() => {
              setError({ ...error, error: false });
            }}
          />
          <label
            htmlFor="tab-2"
            className="tab"
            style={{ marginBottom: "2rem" }}
          >
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
              {error.error ? (
                <p style={{ color: "red" }}>{error.errorMsg}</p>
              ) : null}
              <div className="hr"></div>
            </form>
            <form className="sign-up-htm" onSubmit={signUpUser}>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Email Address
                </label>
                <input
                  type="text"
                  className="input"
                  onChange={(e) => {
                    setSignUser({ ...signUser, email: e.target.value });
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
                  datatype="password"
                  onChange={(e) => {
                    setSignUser({ ...signUser, password: e.target.value });
                  }}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Repeat Password
                </label>
                <input
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(e) => {
                    setSignUser({
                      ...signUser,
                      repeatPassword: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="group">
                <input type="submit" className="button" value="Sign Up" />
              </div>
              {error.error ? (
                <p style={{ color: "red" }}>{error.errorMsg}</p>
              ) : null}
              <div className="hr"></div>
              <div className="foot-lnk">
                <label htmlFor="tab-1" style={{ cursor: "pointer" }}>
                  Are you already member? Log in here
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
