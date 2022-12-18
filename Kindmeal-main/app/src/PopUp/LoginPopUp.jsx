import React, { useContext } from "react";
import style from "./PopUp.module.css";
import { useState } from "react";
import CustomPopup from "./CustomPopUp";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const LoginPopup = () => {
  let data;
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
  const getData = () => {
    data = JSON.parse(localStorage.getItem("RegisteredData")) || [];
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    getData();
    // console.log(data);
    if (data.length > 0) {
      if (
        data[0].email === formData.email &&
        data[0].password === formData.password
      ) {
        navigate("/");
        setIsAuth(true);
      } else if (formData.email !== data[0].email) {
        alert("User Not Found, Please Sign in First");
        navigator("/join");
        setVisibility(false);
      } else if (formData.password !== data[0].password) {
        alert("Wrong Password, Try again");
      }
    } else {
      alert("First Sign in");
      navigate("/join");
      setVisibility(false);
    }
  };

  const handleChange = (e) => {
    let inputName = e.target.name;
    setFormData({ ...formData, [inputName]: e.target.value });
  };
  // console.log(formData);

  return (
    <>
      <button
        onClick={(e) => setVisibility(!visibility)}
        className={style.signup_btn}
        style={{ backgroundColor: "white", color: "black" }}
      >
        Login
      </button>

      <CustomPopup onClose={popupCloseHandler} show={visibility}>
        <form>
          <div className={style.main_popup}>
            <img
              className={style.img2}
              src="https://www.kindmeal.my/images/logo-kindmeal.png"
              alt=""
            />
            <h3>Member Login</h3>
            <br />
            <div className={style.login_input}>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Your Password"
                name="password"
                onChange={handleChange}
              />

              <div>
                <button className={style.btn_login} onClick={handleSubmit}>
                  Login
                </button>
                <br />
                <br />
                <hr />
                <br />
                <a
                  href="https://www.kindmeal.my/login.php?action=facebook"
                  target="_blank"
                >
                  <button className={style.btn_facebook}>
                    <img
                      src="https://www.kindmeal.my/images/icon_button_fb.png"
                      alt="facebook"
                      className={style.facebook_logo}
                    />
                    Login With Facebook
                  </button>
                </a>
              </div>
            </div>

            <div className={style.flex}>
              <p>Forgot password?</p>
              <p onClick={() => navigate("/join")}>
                Not a member? Sign up FREE!
              </p>
            </div>
          </div>
        </form>
      </CustomPopup>
    </>
  );
};

export default LoginPopup;
