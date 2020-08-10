import React from "react";
import "./AccountInfo.css";
import { Link } from "react-router-dom";
// import AccountInfoTitle from "./AccountInfoTitle";

function AccountInfo() {
  return (
    <div className="accountinfo">
      <h1 className="accountinfo__title">Account info</h1>
      <div className="accountInfo__row">
        {/* {Link one} */}

        <div className="accountInfoTitle">
          <div className="accountInfoTitle__info">
            <p className="accountInfoTitle__title">Profile</p>
          </div>
          <Link to="/profile" className="accountInfo__links">
            <button className="accountInfoTitle__button">Click Here</button>
          </Link>
        </div>

        {/* {Link 2} */}
        <div className="accountInfoTitle">
          <div className="accountInfoTitle__info">
            <p className="accountInfoTitle__title">Eligible Schemes</p>
          </div>
          <Link to="/eligibleschemes" className="accountInfo__links">
            <button className="accountInfoTitle__button">Click Here</button>
          </Link>
        </div>
        {/* {link 3} */}
        <div className="accountInfoTitle">
          <div className="accountInfoTitle__info">
            <p className="accountInfoTitle__title">Claims Info</p>
          </div>
          <Link to="/claimsinfo" className="accountInfo__links">
            <button className="accountInfoTitle__button">Click Here</button>
          </Link>
        </div>
      </div>

      <div className="accountInfo__row">
        {/* {link 4} */}
        <div className="accountInfoTitle">
          <div className="accountInfoTitle__info">
            <p className="accountInfoTitle__title">Current Requests Info</p>
          </div>
          <button className="accountInfoTitle__button">Click Here</button>
        </div>
        {/* {link 5} */}
        <div className="accountInfoTitle">
          <div className="accountInfoTitle__info">
            <p className="accountInfoTitle__title">Payments</p>
          </div>
          <button className="accountInfoTitle__button">Click Here</button>
        </div>
        {/* {link 6} */}
        <div className="accountInfoTitle">
          <div className="accountInfoTitle__info">
            <p className="accountInfoTitle__title">Pendings</p>
          </div>
          <button className="accountInfoTitle__button">Click Here</button>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
