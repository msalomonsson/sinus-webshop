import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "./profileSlice";
import "./profile.css";

const Profile = () => {
  const { user } = useSelector((state) => state.profile);
  console.log(user);

  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [cardDate, setCardDate] = useState();
  const [cardCcv, setCardCcv] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios.patch(`/users/${user.id}`, {
      address: address,
      card: {
        ccv: cardCcv,
        date: cardDate,
        number: cardNumber,
      },
      city: city,
      name: name,
    });
    dispatch(getUserInfo(user.uid));
  };

  return (
    <div className="p-container">
      <h1 className="big-category-title">Your account</h1>
      <div className="profil-form">
        <div className="profile-text">
          {user.card && (
            <form onSubmit={handleSubmit} className="form">
              <div className="profile input">
                <label>
                  Full Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="input-street"
                    defaultValue={user.name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </label>
              </div>
              <div className="address">
                <div className="street">
                  <label>
                    Address
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      className="input-street"
                      defaultValue={user.address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className="city">
                  <label>
                    City
                    <input
                      type="text"
                      name="city"
                      className="input-street"
                      placeholder="City"
                      defaultValue={user.city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    />
                  </label>
                </div>
              </div>
              <div className="card">
                <div className="card-number">
                  <label>
                    Credit Card Number
                    <input
                      type="text"
                      name="cardNumber"
                      className="input-street"
                      placeholder="XXXX-XXXX-XXXX-XXXX"
                      defaultValue={user.card.number}
                      onChange={(e) => {
                        setCardNumber(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className="card-date">
                  <label>
                    Expiry Date
                    <input
                      type="text"
                      name="cardDate"
                      className="input-street"
                      placeholder="MM/YY"
                      defaultValue={user.card.date}
                      onChange={(e) => {
                        setCardDate(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className="card-cvc">
                  <label>
                    CCV
                    <input
                      type="text"
                      name="cardCcv"
                      className="input-street"
                      placeholder="CVV"
                      defaultValue={user.card.ccv}
                      onChange={(e) => {
                        setCardCcv(e.target.value);
                      }}
                    />
                  </label>
                </div>
              </div>
              <div className="profile-btn">
                <button type="submit" className="button btn-update">
                  Update Profile
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
