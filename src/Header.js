import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MenuIcon from "@material-ui/icons/Menu";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      {/* {Links} */}
      {/* {1st link} */}
      <div className="header__nav">
        <Link to="/schemes" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Schemes</span>
          </div>
        </Link>

        {/* {Second link} */}
        <Link to="/accountinfo" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Account Info</span>
          </div>
        </Link>
        {/* {Third link} */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Claim @ Requests</span>
          </div>
        </Link>
        {/* {4th link} */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Become a member</span>
          </div>
        </Link>
        {/* {fifth link} */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </Link>

        {/* {sixth link} */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Contact us</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        <MenuIcon className="header__menu"></MenuIcon>
      </div>
    </nav>
  );
}

export default Header;
