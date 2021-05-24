import React from "react";
import { useDispatch } from "react-redux";
import "../cart/cart.css";
import { incrementQty, decrementQty } from "../products/productSlice";
export default function CartItem(props) {
  const dispatch = useDispatch();
  return (
    <div className="cart-product">
      <div className="cart-img-wrapper">
        <img height="100%" src={props.img} alt="" />
      </div>

      <div className="product-info-cart-wrapper">
        <h3 className="product-title-cart">{props.title}</h3>
        <div className="price-qty-cart-wrapper">
          <div className="qty-cart-wrapper">
            <button
              className="qty-btn minus"
              onClick={() => dispatch(decrementQty(props.title))}
            >
              -
            </button>
            <p className="qty-number">{props.qty}</p>
            <button
              className="qty-btn"
              onClick={() => dispatch(incrementQty(props.title))}
            >
              +
            </button>
          </div>
          <p className="price-cart">{props.price}kr</p>
          <p className="price-cart">{props.price * props.qty}kr</p>
        </div>
      </div>
    </div>
  );
}
