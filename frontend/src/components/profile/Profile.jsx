import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "./profileSlice";

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
    <div>
      {user.card && (
        <form onSubmit={handleSubmit}>
          <label>
            <h1>Name</h1>
            <input
              type="text"
              name="name"
              defaultValue={user.name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label>
            <h1>Gatuaddress</h1>
            <input
              type="text"
              name="address"
              defaultValue={user.address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </label>
          <label>
            <h1>City</h1>
            <input
              type="text"
              name="city"
              defaultValue={user.city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </label>
          <label>
            <h1>Payment</h1>
            <label>
              Card number
              <input
                type="text"
                name="cardNumber"
                defaultValue={user.card.number}
                onChange={(e) => {
                  setCardNumber(e.target.value);
                }}
              />
            </label>
            <label>
              Card Date
              <input
                type="text"
                name="cardDate"
                defaultValue={user.card.date}
                onChange={(e) => {
                  setCardDate(e.target.value);
                }}
              />
            </label>
            <label>
              Card CCV
              <input
                type="text"
                name="cardCcv"
                defaultValue={user.card.ccv}
                onChange={(e) => {
                  setCardCcv(e.target.value);
                }}
              />
            </label>
          </label>
          <button type="submit">Update Profile</button>
        </form>
      )}
    </div>
  );
};

export default Profile;
