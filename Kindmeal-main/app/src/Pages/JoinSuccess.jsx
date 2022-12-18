import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../Styles/Join.css";

const JoinSuccess = () => {
  const [details, setDetails] = useState([]);

  const get = async () => {
    const res = await fetch("http://localhost:8080/formData");
    const data = await res.json();
    // console.log(data[data.length-1])
    setDetails(data[data.length - 1]);
    // console.log(details)
  };
  useEffect(() => {
    get();
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <div id="container">
        {/* left..................     */}
        <div id="left">
          <div id="button1" onClick={() => navigate("/join")}>
            <img src="https://www.kindmeal.my/images/join_normal.png" />
            <br />
            <p>Food Lover SignUP</p>
          </div>
          <br />
          <div id="button2" onClick={() => navigate("/joinshop")}>
            <img src="https://www.kindmeal.my/images/join_shop.png"></img>
            <br />
            <p>Resturant SignUP</p>
          </div>
          <br />
          <div id="d3">
            <h6>Why KindMeal?</h6>
            <div>
              <ul>
                <li>Exclusive meat-free deals</li>
                <li> Share yummy food moments</li>
                <li> Meet friendly food lovers</li>
                <li> Discover cool restaurants</li>
                <li> Email updates on tasty deals</li>
                <li> Instant coupons & dining</li>
                <li> No upfront payment, booking or printing</li>
              </ul>
            </div>
            <br />
            <a href="https://www.kindmeal.my/about.htm">More about details </a>
          </div>
        </div>
        <div id="right" style={{ fontSize: "20px" }}>
          <div
            style={{
              marginTop: "60px",
              marginLeft: "-300px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <img src="https://www.kindmeal.my/images/icon_tick.png" />
            <p style={{ marginLeft: "20px", fontSize: "30px" }}>
              Signup Successful
            </p>
          </div>
          <br />
          <p>
            Congratulations {details.firstName}, you're now ready to get started
            on KindMeal.my
          </p>
          <br />
          <p>
            A verification email has been sent to {details.email} Please click
            on the link there to activate your account and begin redeeming
            coupons.
          </p>
          <br />
          <p>Yummy meals are waiting for you!</p>
          <br />
          <br />
          <button id="btn" onClick={() => navigate("/deals")}>
            Login to Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinSuccess;
