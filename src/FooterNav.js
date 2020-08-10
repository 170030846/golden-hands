import React from "react";
import { Link } from "react-router-dom";
import "./FooterNav.css";
function FooterNav() {
  return (
    <div className="header__bottom">
      {/* {Links} */}
      {/* {1st link} */}
      <div className="header__nav">
        <Link to="/announcement" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Announcements</span>
          </div>
        </Link>

        {/* {Second link} */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Terms & Conditions</span>
          </div>
        </Link>
        {/* {Third link} */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Get a Job</span>
          </div>
        </Link>
        {/* {4th link} */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Affiliate</span>
          </div>
        </Link>
        {/* {fifth link} */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Our customers</span>
          </div>
        </Link>
        {/* {sixth link} */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Reviews</span>
          </div>
        </Link>
      </div>
      <div className="copyright">
        <p className="copyright__title">Copyright @2020</p>
      </div>
    </div>
  );
}

export default FooterNav;
