import React, { useState } from "react";
import { useDispatch } from "react-redux";
import db from "../../firebase/db";
import { changeSignIn } from "../profile/profileSlice";

const Login = () => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const logInUser = (e) => {
    e.preventDefault();
    db.auth()
      .signInWithEmailAndPassword(login, password)
      .then((user) => {
        console.log(user.user);
        dispatch(changeSignIn(true));
      });
  };

  return (
    <div>
      <form id="login">
        <label>Login</label>
        <input
          type="text"
          name="login"
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            logInUser(e);
          }}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
