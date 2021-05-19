import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.profile);
  console.log(user);
  return (
    <div>
      {/* <h1>Welcome user {user.name}</h1>
      <h1>
        Your address are <br /> {user.address} <br /> {user.city}
      </h1>
      <h1>Your card info</h1>
      {user.card && (
        <div>
          <h2>{user.card.number}</h2>
          <h3>{user.card.date}</h3>
          <h3>{user.card.ccv}</h3>
        </div>
      )} */}

      {user.card && (
        <form>
          <label>
            <h1>Name</h1>
            <input type="text" name="name" defaultValue={user.name} disabled />
          </label>
          <label>
            <h1>Gatuaddress</h1>
            <input
              type="text"
              name="address"
              defaultValue={user.address}
              disabled
            />
          </label>
          <label>
            <h1>City</h1>
            <input type="text" name="city" defaultValue={user.city} disabled />
          </label>
          <label>
            <h1>Payment</h1>
            <label>
              Card number
              <input
                type="text"
                name="cardNumber"
                defaultValue={user.card.number}
                disabled
              />
            </label>
            <label>
              Card Date
              <input
                type="text"
                name="cardDate"
                defaultValue={user.card.date}
                disabled
              />
            </label>
            <label>
              Card CCV
              <input
                type="text"
                name="cardCcv"
                defaultValue={user.card.ccv}
                disabled
              />
            </label>
          </label>
        </form>
      )}
    </div>
  );
};

export default Profile;
