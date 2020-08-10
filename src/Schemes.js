import React from "react";
import Product from "./Product";
import "./Schemes.css";
function Schemes() {
  return (
    <div className="schemes">
      {/* {Banner image} */}
      <img
        className="schemes__banner"
        src="https://images.hdqwalls.com/wallpapers/4k-money-heist-season-4-netflix-aw.jpg"
        alt=""
      />
      {/* {Product id, title, price, info} */}
      <div className="schemes__row">
        <Product
          id="1"
          title="Golden Loan"
          info="Info about the product"
          price={1000}
          image="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
        />
        <Product
          id="1"
          title="Golden Loan"
          info="Info about the product"
          price={1000}
          image="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="schemes__row">
        <Product
          id="1"
          title="Golden Loan"
          info="Info about the product"
          price={1000}
          image="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
        />
        <Product
          id="1"
          title="Golden Loan"
          info="Info about the product"
          price={1000}
          image="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
        />
        <Product
          id="1"
          title="Golden Loan"
          info="Info about the product"
          price={1000}
          image="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="schemes__row">
        <Product
          id="1"
          title="Golden Loan"
          info="Info about the product"
          price={500}
          image="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
        />
      </div>
    </div>
  );
}

export default Schemes;
