import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../cart/cart-preview.css";
export default function CartPreview() {
  const { cart } = useSelector((state) => state.products);
  const totalPrice = cart.reduce(
    (sum, item) => (sum += item.price * item.qty),
    0
  );
  return (
    <div className="cart-preview">
      <h4 className="preview-title-big">Added to cart</h4>
      <div className="preview-wrapper">
        {cart.map((item, i) => {
          return (
            <div className="preview-info-card" key={i}>
              <div className="preview-img-wrapper">
                <img height="100%" src={item.img} alt="" />
              </div>
              <div className="info-content">
                <h5 className="preview-title">{item.title}</h5>
                <div className="preview-qty-price-wrapper">
                  <p className="preview-qty">Quantity: {item.qty}</p>
                  <p className="preview-price">{item.price * item.qty}kr</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link to={`/cart`}>
        <button type="button" className="cart-preview-btn">
          View cart {totalPrice}kr
        </button>
      </Link>
    </div>
  );
}
