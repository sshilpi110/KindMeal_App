import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../Styles/Home.module.css";
function Home3() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          marginTop: "50px",
          marginBottom: "40px",
          fontSize: "36px",
          color: "#666666",
          textAlign: "center",
        }}
      >
        Introducing The World's 1st Meat-Free Lifestyle Platform
        <br />
        <table
          width="500"
          align="center"
          height="50"
          style={{
            margin: "auto",
            marginIop: "10px",
            fontSize: "20px",
            color: "#999999",
          }}
        >
          <tbody>
            <tr>
              <td valign="middle" align="left">
                {" "}
                Brought to you by
              </td>
              <td valign="middle" align="left">
                <a href="http://www.PetFinder.my/" target="_blank">
                  <img
                    src="https://www.kindmeal.my/images/logo-petfinder.png"
                    height="50"
                    border="0"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "26px",
          color: "#888888",
          marginTop: "10px",
        }}
      >
        Instant coupon &amp; dining. No upfront coupon payment, booking or
        printing.
        <br />
        <br />
      </div>
      <table width="80%" style={{ margin: "auto", marginBottom: "80px" }}>
        <tbody>
          <tr>
            <td width="25%" align="center" valign="middle">
              <div className={style.intro_feature}>
                <a href="https://www.kindmeal.my/deals.htm">
                  <img
                    src="https://www.kindmeal.my/images/intro_deal.png"
                    style={{
                      height: "100px",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                    border="0"
                  />
                </a>
                <br />
                Get Great Deals
                <div
                  style={{
                    fontSize: "14px",
                    color: "#888888",
                    marginTop: "5px",
                  }}
                >
                  Show our FREE digital coupons to instantly enjoy exciting
                  deals
                </div>
              </div>
            </td>

            <td width="25%" align="center" valign="middle">
              <div className={style.intro_feature}>
                <a href="https://www.kindmeal.my/moments.htm">
                  <img
                    src="https://www.kindmeal.my/images/intro_kindmoment.png"
                    style={{
                      height: "100px",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                    border="0"
                  />
                </a>
                <br />
                Share KindMoments
                <div
                  style={{
                    fontSize: "14px",
                    color: "#888888",
                    marginTop: "5px",
                  }}
                >
                  Spread the joy by sharing your yummy dining moments
                </div>
              </div>
            </td>

            <td width="25%" align="center" valign="middle">
              <div className={style.intro_feature} style={{ fontSize: "18px" }}>
                <a href="https://www.kindmeal.my/menu.htm">
                  <img
                    src="https://www.kindmeal.my/images/intro_menu.png"
                    style={{
                      height: "100px",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                    border="0"
                  />
                </a>
                <br />
                Discover Delicious Food
                <div
                  style={{
                    fontSize: "14px",
                    color: "#888888",
                    marginTop: "5px",
                  }}
                >
                  Explore the latest exquisite offerings and creative menus
                </div>
              </div>
            </td>

            <td width="25%" align="center" valign="middle">
              <div className={style.intro_feature}>
                <a href="https://www.kindmeal.my/moments.htm">
                  <img
                    src="https://www.kindmeal.my/images/intro_friends.png"
                    style={{
                      height: "100px",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                    border="0"
                  />
                </a>
                <br />
                Meet Food Lovers
                <div
                  style={{
                    fontSize: "14px",
                    color: "#888888",
                    marginTop: "5px",
                  }}
                >
                  Make new, compassionate friends and share great food tips
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        style={{
          textAlign: "center",
          marginBottom: "0px",
          fontSize: "20px",
          color: "#888888",
          marginTop: "5px",
        }}
      >
        Any restaurant or cafe can join KindMeal, vegetarian or not, as long as
        the deals and menu featured are meat-free.
        <br />
        Enjoy a great meat-free dining experience. Easily save animal lives,
        health, environment and money now!
        <br />
        <br />
      </div>
      <a
        href=""
        onClick={() => navigate("/join")}
        style={{ textDecoration: "none" }}
      >
        <center>
          <div
            className={style.button_red}
            style={{
              marginTop: "40px",
              marginBottom: "80px",
              width: "450px",
              height: "100px",
              lineHeight: "40px",
              fontSize: "40px",
              borderRadius: "10px",
              color:"white"
            }}
          >
            <div style={{ marginTop: "12px" ,color:"white"}}>Join KindMeal Now</div>
            <div style={{ fontSize: "16px", lineHeight: "10px" ,color:"white"}}>
              <br />
              Your tasty journey begins here
            </div>
          </div>
        </center>
      </a>
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "26px",
          color: "#888888",
          marginTop: "10px",
        }}
      >
        <p style={{ textAlign: "center", fontSize: "20px" }}> As Featured In</p>
        <br />
        <img src="https://www.kindmeal.my/images/media-feature2.png" />
      </div>
      <center>
        <div
          style={{
            height: "250px",
            backgroundColor: "#ececec",
            width: "100%",
            textAlign: "center",
            verticalAlign: "top",
            marginTop: "0px",
          }}
        >
          <img src="https://www.kindmeal.my/images/banner_whykindmeal.png" />
        </div>
      </center>
    </div>
  );
}

export default Home3;
