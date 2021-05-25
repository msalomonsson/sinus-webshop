import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { removeFromCart } from "../products/productSlice";
import { Link } from "react-router-dom";
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
        {cart.length === 0 ? (
          <div className="empty-cart">
            <h3 className="empty-text">Your cart is empty..</h3>
            <Link to="/products">
              <h3 className="empty-link">Start shopping!</h3>
            </Link>
          </div>
        ) : (
          <div className="product-details-cart-wrapper">
            <h4>Product details</h4>
            <div className="product-details-list-cart">
              <h4>Quantity</h4>
              <h4>Price</h4>
              <h4>Total</h4>
            </div>
          </div>
        )}

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
              <p className="sum-text">Products x {totalQty}</p>
              <p>{totalPrice}kr</p>
            </div>
            <div className="sum-box sum-second">
              <p className="sum-text">Shipping</p>
              <p className="sum-text free-green">Free</p>
            </div>
            <div className="sum-box sum-third">
              <h3 className="total">Total cost</h3>
              <h3 className="total">{totalPrice}kr</h3>
            </div>
            <Link to={`/login`}>
              <button
                className="sum-btn"
                disabled={cart.length === 0}
                style={
                  cart.length === 0
                    ? {
                        backgroundColor: "#d4d4d4",
                        color: "#e6e6e6",
                        cursor: "not-allowed",
                      }
                    : null
                }
              >
                Checkout
              </button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Cart;
