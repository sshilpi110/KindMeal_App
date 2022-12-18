import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import "../Styles/Join.css";
const JoinShop = () => {
  const navigate = useNavigate();
  const [FormData, setFormData] = useState([]);
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const handleChange = (e) => {
    const inputName = e.target.name;
    if (e.target.type === "checkbox") {
      setFormData({
        ...FormData,
        [inputName]: e.target.checked,
      });
    } else {
      setFormData({
        ...FormData,
        [inputName]: e.target.value,
      });
    }
  };
  const post = () => {
    let arr = [];

    arr.push(FormData);
    localStorage.setItem("RegisteredData", JSON.stringify(arr));
    setIsAuth(true);
    console.log(arr);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post();
    if (FormData) {
      //    console.log(FormData)
      navigate("/joinsuccess");
    } else {
      alert("Fill the details Correctly");
    }
  };
  return (
    <>
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

        {/* Right.......................................   */}
        <div id="right">
          <div id="head1">
            <h1>Restaurant / Shop Owner? Sign Up Now</h1>
          </div>
          <br />
          <div id="paragraph">
            <p>
              Improve your business, build brand loyalty, and save precious
              animal lives! Join KindMeal now to enjoy the following features:
            </p>
          </div>
          <br />
          <div id="ul">
            <ul>
              <li>Effectively reach over 200,000 consumers</li>
              <li>
                Feature your shop across premium partner platforms & media
                channels
              </li>
              <li>Offer coupons & deals to attract new customers</li>
              <li>Showcase your delicious meat-free meals</li>
              <li>Interact with our community of food lovers</li>
              <li>
                Get your exclusive Shop Page — https://KindMeal.my/YourShopName
              </li>
            </ul>
          </div>
          <br />
          <div id="p2">
            <p>
              To support our welfare causes, we offer simple, affordable{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                Premium Plans
              </a>{" "}
              on a monthly <br />
              subscription basis, starting from RM 99 only. No deal commissions,
              no hidden fees. Premium <br /> Plan details are available upon
              signing up.
            </p>
          </div>
          <br />
          <br />
          <p style={{ fontSize: "25px" }}>Personal Profile</p>

          <p>
            First, we setup your personal profile, then proceed to configure
            your shop promotions
          </p>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", marginLeft: "110px" }}>
              <label>First Name</label>
              <label style={{ marginLeft: "200px" }}>Last Name</label>
            </div>
            <div>
              {" "}
              Your Name
              <input
                id="fn"
                name="firstName"
                type="first name"
                onChange={handleChange}
                required
              />
              <input
                id="ln"
                type="last name"
                name="lastName"
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <div style={{ display: "flex", marginLeft: "110px" }}>
              <label>
                Your email must be correct to receive activation email
              </label>
            </div>
            <div>
              {" "}
              Email
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div>
              {" "}
              Re-Enter Email{" "}
              <input
                id="Remail"
                name="email"
                type="email"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div>
              {" "}
              Password{" "}
              <input
                id="pwd"
                name="password"
                type="password"
                onChange={handleChange}
                required
              ></input>
            </div>
            <br />
            <div>
              <div style={{ marginLeft: "110px" }}>
                <label>
                  Choose a cool username for your Personal Profile page,
                  comments & reviews
                </label>
                <br />
                <a href="" style={{ textDecoration: "none", color: "blue" }}>
                  {" "}
                  http://KindMeal.my/Username
                </a>
              </div>{" "}
              Username
              <input
                id="username"
                name="username"
                type="username"
                onChange={handleChange}
                required
              ></input>
            </div>
            <br />
            <div style={{ marginLeft: "110px" }}>
              <label>Only your age will be publicly visible</label>
            </div>
            <div>
              Birth Date{" "}
              <input
                id="dob"
                onChange={handleChange}
                name="dob"
                type="date"
                required
              ></input>
            </div>
            <br />
            <div>
              {" "}
              Country
              <select
                id="country"
                name="country"
                onChange={handleChange}
                required
              >
                <option>Your Country</option>
                <option>INDIA</option>
                <option>CHINA</option>
                <option>BANGALADESH</option>
                <option>SRILANKA</option>
                <option>ENGLAND</option>
                <option>NEWZEALAND</option>
                <option>AUSTRALIA</option>
                <option>PAKISTAN</option>
                <option>FRANCE</option>
                <option>RUSSIA</option>
                <option>AMERICA</option>
                <option>BRAZIL</option>
                <option>CANANDA</option>
                <option>UKRAINE</option>
                <option>GERMANY</option>
                <option>AUSTRIA</option>
                <option>ARGENTINA</option>
                <option>COLOMBIA</option>
              </select>
            </div>
            <br />
            <div>
              State
              <select id="state" name="state" onChange={handleChange} required>
                <option>Select State</option>
                <option>PATNA</option>
                <option>BANGALORE</option>
                <option>KOLKATA</option>
                <option>GANDHINAGAR</option>
                <option>LUCKNOW</option>
                <option>ITNANAGAR</option>
                <option>MUMBAI</option>
                <option>DEHRADUN</option>
              </select>
            </div>
            <br />
            <div id="gender">
              Gender
              <input
                id="male"
                onChange={handleChange}
                name="gender"
                type="radio"
                value="male"
                style={{ marginLeft: "65px", marginRight: "5px" }}
              />
              Male
              <input
                id="female"
                name="gender"
                type="radio"
                value="female"
                style={{ marginLeft: "12px", marginRight: "5px" }}
                onChange={handleChange}
              />
              Female
            </div>
            <br />
            <div id="file">
              Profile Photo{" "}
              <input
                id="file1"
                required
                type="file"
                onChange={handleChange}
                name="photo"
                placeholder="Select Photo"
              />
            </div>
            <br />
            <div id="agree">
              <input
                type="checkbox"
                required
                name="agree"
                onChange={handleChange}
              />{" "}
              I agree to KindMeal.my's{" "}
              <a href="https://www.kindmeal.my/terms.htm">Terms & Conditions</a>
            </div>
            <br />
            <br />
            <div>
              <button id="jn" type="submit">
                Set Up My Shop & Deals »
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#e0e0e0",
          height: "280px",
          verticalAlign: "middle",
          marginTop: "100px",
        }}
      >
        <img
          src="https://www.kindmeal.my/images/how_kindmeal_works.png"
          style={{
            marginLeft: "150px",
            marginTop: "30px",
            marginBottom: "0px",
          }}
        />
      </div>
    </>
  );
};

export default JoinShop;
