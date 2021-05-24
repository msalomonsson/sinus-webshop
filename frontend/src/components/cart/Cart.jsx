import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { removeFromCart } from "../products/productSlice";
import "../cart/cart.css";
const Cart = () => {
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const totalQty = cart.reduce((sum, item) => (sum += item.qty), 0);
  const totalPrice = cart.reduce(
    (sum, item) => (sum += item.price * item.qty),
    0
  );
  return (
    <div className="cart-container">
      <div className="cart-product-wrapper">
        <h2 className="shopping-cart-title">Shopping Cart</h2>
        <div className="product-details-cart-wrapper">
          <h5>Product details</h5>
          <div className="product-details-list-cart">
            <h5>Quantity</h5>
            <h5>Price</h5>
            <h5>Total</h5>
          </div>
        </div>

        {cart.map((item, i) => {
          return (
            <div key={i} className="cart-item-container">
              <div onClick={() => dispatch(removeFromCart(item.title))}>
                <i className="far fa-trash-alt"></i>
              </div>
              <CartItem {...item} />
            </div>
          );
        })}
      </div>
      <div className="sum-container">
        <div className="sum-wrapper">
          <h4 className="sum-title">Order summary</h4>
          <section>
            <div className="sum-box sum-first">
              <p className="sum-text">Products: {totalQty}</p>
              <p>{totalPrice}kr</p>
            </div>
            <div className="sum-box sum-second">
              <p className="sum-text">Shipping</p>
              <p className="line">Free</p>
            </div>
            <div className="sum-box sum-third">
              <h4 className="total">Total cost</h4>
              <h4 className="total">{totalPrice}kr</h4>
            </div>
            <button className="sum-btn">Checkout</button>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Cart;
