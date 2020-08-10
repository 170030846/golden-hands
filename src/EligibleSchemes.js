import React from "react";
import "./EligibleSchemes.css";
function EligibleSchemes() {
  return (
    <div clasasName="eligibleSchemes">
      <h1 className="eligibleSchemes__title">Eligible Schemes</h1>
      <div className="eligibleSchemes__row">
        {/* {Link one} */}

        <div className="eligibleSchemesTitle">
          <div className="eligibleSchemesTitle__info">
            <p className="eligibleSchemesTitle__title">Scheme 1</p>
            <p className="eligibleSchemesTitle__eligible">Eligible</p>
          </div>
        </div>
        <div className="eligibleSchemesTitle">
          <div className="eligibleSchemesTitle__info">
            <p className="eligibleSchemesTitle__title">Scheme 2</p>
            <p className="eligibleSchemesTitle__eligible">Eligible</p>
          </div>
        </div>
        <div className="eligibleSchemesTitle">
          <div className="eligibleSchemesTitle__info">
            <p className="eligibleSchemesTitle__title">Scheme 3</p>
            <p className="eligibleSchemesTitle__eligible">Not Eligible</p>
          </div>
        </div>
        <div className="eligibleSchemesTitle">
          <div className="eligibleSchemesTitle__info">
            <p className="eligibleSchemesTitle__title">Scheme 4</p>
            <p className="eligibleSchemesTitle__eligible">Not Eligible</p>
          </div>
        </div>
      </div>
      <div className="eligibleSchemes__row">
        <div className="eligibleSchemesTitle">
          <div className="eligibleSchemesTitle__info">
            <p className="eligibleSchemesTitle__title">Scheme 5</p>
            <p className="eligibleSchemesTitle__eligible">Eligible</p>
          </div>
        </div>
        <div className="eligibleSchemesTitle">
          <div className="eligibleSchemesTitle__info">
            <p className="eligibleSchemesTitle__title">Scheme 6</p>
            <p className="eligibleSchemesTitle__eligible">Not Eligible</p>
          </div>
        </div>
        <div className="eligibleSchemesTitle">
          <div className="eligibleSchemesTitle__info">
            <p className="eligibleSchemesTitle__title">Scheme 7</p>
            <p className="eligibleSchemesTitle__eligible">Eligible</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EligibleSchemes;
