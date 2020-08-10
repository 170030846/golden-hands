import React from "react";
import "./AnnouncementProduct.css";

function AnnouncementProduct({ title, date }) {
  return (
    <div className="announcementProduct">
      <div className="announcementProduct__info">
        <p className="announcementProduct__title">{title}</p>
        <p className="announcementProduct__datemain">
          <small>From Date</small>
          <strong className="announcementProduct__date">{date}</strong>
        </p>
        <p className="announcementProduct__datemain">
          <small>To Date</small>
          <strong className="announcementProduct__todate">{date}</strong>
        </p>
      </div>
    </div>
  );
}

export default AnnouncementProduct;
