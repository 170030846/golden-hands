import React from "react";
import "./Announcement.css";
import AnnouncementProduct from "./AnnouncementProduct";

function Announcement() {
  return (
    <div className="announcement">
      <h2 className="announcement_title">Golden Pay Claim Requests</h2>
      <div className="announcement__row">
        <AnnouncementProduct
          title="Golden Loan Claim Requests"
          date="15 August 2020"
        />
      </div>
      <div className="announcement__row">
        <AnnouncementProduct
          title="Golden Loan Claim Requests"
          date="15 August 2020"
        />
        <AnnouncementProduct
          title="Golden Loan Claim Requests"
          date="15 August 2020"
        />
      </div>
      <div className="announcement__row">
        <AnnouncementProduct
          title="Golden Loan Claim Requests"
          date="15 August 2020"
        />
        <AnnouncementProduct
          title="Golden Loan Claim Requests"
          date="15 August 2020"
        />
      </div>
      <div className="announcement__row">
        <AnnouncementProduct
          title="Golden Loan Claim Requests"
          date="15 August 2020"
        />
        <AnnouncementProduct
          title="Golden Loan Claim Requests"
          date="15 August 2020"
        />
      </div>
    </div>
  );
}

export default Announcement;
