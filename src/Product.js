import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ id, title, info, price, image }) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    // Add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        info: info,
        price: price,
        image: image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <h3 className="product__title">{title}</h3>
        <p className="product__information">{info}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt="" />
      <div className="product__buttons">
        <button onClick={addToBasket} className="product__buttonleft">
          Buy Now
        </button>
        <button className="product__buttonright">Renewal</button>
      </div>
    </div>
  );
}

export default Product;
