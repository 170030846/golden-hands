import React from "react";
import "./Profile.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Profile() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="profile">
      <div className="profile__container">
        <h1>Your Profile</h1>
        <form>
          <h5>Name</h5>
          <input
            // value=""
            // onChange={(event) => setEmail(event.target.value)}
            type="text"
          />
          <h5>Date of Birth</h5>
          <input
            // value=""
            // onChange={(event) => setPassword(event.target.value)}
            type="date"
          />
          <h5>College</h5>
          <input type="text" />
          <h5>Email</h5>
          <input value={user?.email} type="email" />
          <h5>Phone</h5>
          <input type="text" />
          <h5>Username</h5>
          <input type="text" />
          <button type="submit" className="profile__UpdateButton">
            Update
          </button>
        </form>
        {/* <p>
          By continuing, you agree to Golden Hand's Conditions of Use and
          Privacy Notice.
        </p>
        <button onClick={register} className="login_registerButton">
          Create your Golden Hands Account
        </button> */}
      </div>
    </div>
  );
}

export default Profile;
