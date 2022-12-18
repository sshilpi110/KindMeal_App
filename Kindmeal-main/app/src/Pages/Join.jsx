import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import "../Styles/Join.css";
const Join = () => {
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({});
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
  // console.log(FormData)
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
            <h1>
              Food Lover? Sign Up Now or{" "}
              <a href="https://www.facebook.com/v2.9/dialog/oauth?client_id=292733157519852&redirect_uri=https%3A%2F%2Fwww.kindmeal.my%2Flogin.php%3Faction%3Dfacebook&state=9152522c0f1a08cd79f59884f7db96b8&display=popup&scope=email,user_birthday,user_location">
                Login With Facebook
              </a>
            </h1>
          </div>
          <br />
          <div id="paragraph">
            <p>
              Discover tasty meat-free meals and dine instantly — no coupon
              payment, booking or printing is required.
            </p>
          </div>
          <br />
          <div id="p2">
            <p>
              KindMeal is a fun, exciting and cool new way for you to show your
              compassion towards animals. We collaborate with kind restaurants
              and cafes across the nation to bring you delicious meat-free foods
              that will not only help save precious animal lives, but improve
              your health and save your money at the same time!
            </p>
          </div>
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
                onChange={handleChange}
                type="first name"
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
                name="dob"
                onChange={handleChange}
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
                name="gender"
                onChange={handleChange}
                value="male"
                type="radio"
                style={{ marginLeft: "65px", marginRight: "5px" }}
              />
              Male
              <input
                id="female"
                name="gender"
                onChange={handleChange}
                value="female"
                type="radio"
                style={{ marginLeft: "12px", marginRight: "5px" }}
              />
              Female
            </div>
            <br />
            <div id="file">
              Profile Photo{" "}
              <input
                required
                id="file1"
                name="photo"
                type="link"
                placeholder="Select Photo"
                onChange={handleChange}
              />
            </div>
            <br />
            <div id="agree">
              <input
                required
                type="checkbox"
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
                Join Now
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

export default Join;
