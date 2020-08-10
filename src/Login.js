import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //prevents refresh!!
    //do the login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in, redirect to homepage.....
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault(); //this stops the refresh
    //do the register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create a user and logged in...., redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      {/* <Link to="/">
        <img
          className="login__logo"
          src="https://www.kluniversity.in/img/logo9.png"
          alt=""
        />
      </Link> */}
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Golden Hand's Conditions of Use and
          Privacy Notice.
        </p>
        <button onClick={register} className="login_registerButton">
          Create your Golden Hands Account
        </button>
      </div>
    </div>
  );
}

export default Login;
