import React from "react";

import "./ClaimInfo.css";

function ClaimInfo() {
  return (
    <div>
      <h1 className="accountinfo__title">Claims Info</h1>
      <div className="accountInfo__row">
        {/* {Link one} */}

        <div className="accountInfoTitle">
          <div className="accountInfoTitle__info">
            <p className="accountInfoTitle__title">Scheme 1</p>
          </div>

          <button className="accountInfoTitle__button">Info</button>
        </div>

        {/* {Link 2} */}
        <div className="accountInfoTitle">
          <div className="accountInfoTitle__info">
            <p className="accountInfoTitle__title">Scheme 2</p>
          </div>

          <button className="accountInfoTitle__button">Info</button>
        </div>
        {/* {link 3} */}
        <div className="accountInfoTitle">
          <div className="accountInfoTitle__info">
            <p className="accountInfoTitle__title">Scheme 5</p>
          </div>
          <button className="accountInfoTitle__button">Info</button>
        </div>
      </div>

      <div className="accountInfo__row">
        {/* {link 4} */}
        <div className="accountInfoTitle">
          <div className="accountInfoTitle__info">
            <p className="accountInfoTitle__title">Scheme 7</p>
          </div>
          <button className="accountInfoTitle__button">Info</button>
        </div>
      </div>
    </div>
  );
}

export default ClaimInfo;
