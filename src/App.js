import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import FooterNav from "./FooterNav";
import Schemes from "./Schemes";
import Login from "./Login";
import Checkout from "./Checkout";
import AccountInfo from "./AccountInfo";
import Announcement from "./Announcement";
import Profile from "./Profile";
import EligibleSchemes from "./EligibleSchemes";
import ClaimInfo from "./ClaimInfo";
import "./App.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();
  //useEffect
  //piece of code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      // any cleanup operations go in here
      unsubscribe();
    };
  }, []);

  console.log("USER IS >>>", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/schemes">
            <Header />
            <Schemes />
            <FooterNav />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <FooterNav />
          </Route>
          <Route path="/announcement">
            <Header />
            <Announcement />
            <FooterNav />
          </Route>
          <Route path="/accountinfo">
            <Header />
            <AccountInfo />
            <FooterNav />
          </Route>
          <Route path="/profile">
            <Header />
            <Profile />
            <FooterNav />
          </Route>
          <Route path="/eligibleschemes">
            <Header />
            <EligibleSchemes />
            <FooterNav />
          </Route>
          <Route path="/claimsinfo">
            <Header />
            <ClaimInfo />
            <FooterNav />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <FooterNav />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
