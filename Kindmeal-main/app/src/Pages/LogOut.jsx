import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../Styles/Logout.module.css";

const Logout = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/");
    //
  };
  return (
    <>
      <br />
      <br />
      <br />
      <div className={style.container}>
        <div className={style.img}>
          <img
            id="img"
            src="https://www.kindmeal.my/images/icon_tick.png"
            alt=""
          />

          <p>See You Again,Food Lover!</p>
        </div>
        <br />
        <br />

        <p>You have successfully Logged out of KindMeal my</p>

        <br />

        <p>
          Whenever you hunger for absolutely delicious and irresistible
          vegterian food,we're here to satisfy your deeprest creavings. So,do
          visit us again!
        </p>
        <br />

        <button id="btn" onClick={handleButton}>
          Return to Main page
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Logout;
