import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import style from "../Styles/MealDeal.module.css";
const MealDeal = () => {
  const [show, setShow] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [f2data, setF2data] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8080/mealDeals/${id}`)
      .then((res) => res.json())
      .then((data) => setShow(data))
      .catch((er) => console.log(er));
  }, []);
  const get = async () => {
    let res2 = await fetch("http://localhost:8080/hotpicks2");
    let data2 = await res2.json();
    setF2data(data2);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(`http://localhost:8080/recipeData?_limit=5`);
        let data = await res.json();
        setData(data);
        // console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    get();
    // console.log(data)
  }, []);
  return (
    <div>
      <div>
        <div className={style.head_div}>
          <img
            src="https://www.kindmeal.my/photos/shop/5/512-c.jpg"
            alt="banner"
          />

          <div className={style.username_div} key={show.id}>
            <div>
              <h1>
                {" "}
                {show.title} by {show.name}
              </h1>
            </div>
            <div className={style.share_btn_div}>
              <button>Share</button>
              <button>Like</button>
            </div>
          </div>
        </div>

        <div className={style.user}>
          <div className={style.user_img}>
            <img
              src="https://www.kindmeal.my/photos/shop/4/491-3394-m.jpg"
              alt="user-images"
            />
          </div>
        </div>
      </div>
      <div className={style.food}>
        <div className={style.head}>{show.title}</div>
        <div className={style.child_div}>
          <img src={show.img} />
          <div>
            <div style={{ display: "flex" }}>
              <div className={style.inner}>
                <p>Normal price</p>
                <br />
                <br />
                <p style={{ color: "#333333", fontSize: "35px" }}>RM6.90</p>
              </div>
              <div className={style.inner}>
                <p>KindMeal Discount</p>
                <br />
                <br />
                <p style={{ color: "#333333", fontSize: "35px" }}>20% Off</p>
              </div>
            </div>
            <div className={style.inner2}>
              <p>
                No pre-payment or booking needed. Get coupon & dine instantly!
              </p>
              <br />
              <div>
                <img src="https://www.kindmeal.my/images/icon_button_download.png" />{" "}
                Get Free Coupon
              </div>
              <br />
              <p>
                Grab this KindMeal Coupon now to enjoy 20% off!{" "}
                <a href="#"> How it work</a>
              </p>
            </div>
          </div>
        </div>
        <div className={style.child_div}>
          <div className={style.inner1}>
            <p>Delicious Details</p>
            <p style={{ fontSize: "17px" }}>
              Enjoy a cozy dining experience where we pamper you with a variety
              of healthy, exquisite and natural foods
            </p>
            <br />
            <p style={{ fontSize: "17px", marginBottom: "0px" }}>
              Select from any of our delicious Ala Carte menu:
            </p>
            <ul>
              <li>Snack</li>
              <li>Soup</li>
              <li>Rice</li>
              <li>Relish Dish</li>
              <li>Noodles</li>
              <li> Juice</li>
              <li>Tea</li>
              <li>Mini Steamboat</li>
              <li>Beverages</li>
            </ul>
            <br />
            <p style={{ fontSize: "17px", marginBottom: "3px" }}>
              *** Note: ***
            </p>
            <p style={{ fontSize: "17px" }}>
              Discount is not valid for Set Packages (Set A, Set B).
            </p>
            <br />
            <p>Diet Restriction</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
                <img src="https://www.kindmeal.my/images/icon_egg_disabled.png" />{" "}
                No Eggs
              </span>
              <span>
                <img src="https://www.kindmeal.my/images/icon_milk.png" />{" "}
                Contains Dairy <br />
                or Milk
              </span>
              <span>
                <img src="https://www.kindmeal.my/images/icon_alcohol_disabled.png" />{" "}
                No Alcohol
              </span>
            </div>
            <br />
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "23px" }}>Rating</span>
              <div style={{ display: "flex" }} className={style.star}>
                <img src="https://www.kindmeal.my/images/icon_star.png" />
                <img src="https://www.kindmeal.my/images/icon_star.png" />
                <img src="https://www.kindmeal.my/images/icon_star.png" />
                <img src="https://www.kindmeal.my/images/icon_star.png" />
                <img src="https://www.kindmeal.my/images/icon_star.png" />
                <img src="https://www.kindmeal.my/images/icon_star.png" />
              </div>
              <span>(5 Votes)</span>
            </div>
          </div>
          <div className={style.inner1}>
            <p>Location</p>
            <p style={{ fontSize: "15px", lineHeight: "18px" }}>
              6, Jalan Rodat 3/Ku5, Bandar Bukit Raja, 41050 Klang, Selangor.
              Opens: Mon - Sun: 10am - 9.45pm; Closed on Tue every 2nd & 4th
              week of month Tel: 03-33585382, 012-6699535
            </p>
            <a href="#">View Details & Location Map »</a>
            <br />
            <br />
            <br />
            <p>Terms & Conditions</p>
            <div style={{ display: "flex" }}>
              <div className={style.child1}>
                <ul>
                  <li>Coupon Validity</li>
                  <li>Exclusivity</li>
                  <li>Reservation</li>
                  <li>Repeat Customers</li>
                  <li>Dining Terms</li>
                </ul>
              </div>
              <div className={style.child2}>
                <ul>
                  <li> Must use coupon by May 14th, 2022</li>
                  <li>Valid with other KindMeal.my coupons only</li>
                  <li> Not required</li>
                  <li>You can get this coupon once per week</li>
                  <li>
                    <ul>
                      <li>Additional Service Charge applicable</li>
                      <li>There is no SS</li>
                      <li>
                        Discount not valid for Set Packages (Set A, Set B)
                      </li>
                      <li>
                        Closed on Tuesdays every 2nd and 4th week of the month.
                        If the Tuesday falls on 1st or 15th of lunar month, the
                        following day, Wednesday will be the <br />
                        OFF day.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={style.imgDiv}>
          <img src="https://www.kindmeal.my/photos/deal/6/633-3864-s.jpg" />
          <img src="https://www.kindmeal.my/photos/deal/6/633-3865-s.jpg" />
          <img src="https://www.kindmeal.my/photos/deal/6/633-3866-s.jpg" />
          <img src="https://www.kindmeal.my/photos/deal/6/633-3867-s.jpg" />
          <img src="https://www.kindmeal.my/photos/deal/6/633-3868-s.jpg" />
          <img src="https://www.kindmeal.my/photos/deal/6/633-3869-s.jpg" />
          <img src="https://www.kindmeal.my/photos/deal/6/633-3870-s.jpg" />
          <img src="https://www.kindmeal.my/photos/deal/6/633-3871-s.jpg" />
          <img src="https://www.kindmeal.my/photos/deal/6/633-3872-s.jpg" />
        </div>
      </div>
      <br />
      <div className={style.offer}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontSize: "20px" }}> Other Exciting Meal Deals</p>
          <p style={{ fontSize: "17px" }}>
            <a
              href="https://www.kindmeal.my/buzz.htm"
              style={{ color: "blue" }}
            >
              View More Deals
            </a>{" "}
             |  
          </p>
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {data.map((e) => {
            return (
              <Link
                to={`/deals/${e.id}`}
                style={{ textDecoration: "none", color: "#444444" }}
              >
                <div
                  style={{ width: "100%", height: "100%", textAlign: "center" }}
                  key={e.id}
                >
                  <img src={e.img} />
                  <p style={{ textAlign: "center", fontSize: "12px" }}>
                    {e.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <br />
      <div style={{ width: "70%", margin: "auto" }}>
        <img src="https://www.kindmeal.my/images/ads/banner_advertising-1100x280.png" />
      </div>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
          margin: "auto",
        }}
      >
        <div>
          <p className={style.help}>Need Help?</p>
          <br />
          <div className={style.help1}>
            <br />
            <p>
              Do you have any questions or feedback regarding this deal? Please
              write to the shop for further assistance.
            </p>
            <br />
            <button>Contact Shop</button>
            <br />
            <br />
            <p>
              If you require general help regarding KindMeal and using coupons,
              please visit the Help Page.
            </p>
            <br />
          </div>
        </div>
        <div>
          <p className={style.review}>Reviews</p>
          <div className={style.table}>
            {f2data.map((e) => {
              return (
                <div style={{ display: "flex" }}>
                  <img src={e.logo} />
                  <div className={style.last}>
                    <p>{e.txt1}</p>
                    <div style={{ display: "flex" }} className={style.star1}>
                      <img src="https://www.kindmeal.my/images/icon_star.png" />
                      <img src="https://www.kindmeal.my/images/icon_star.png" />
                      <img src="https://www.kindmeal.my/images/icon_star.png" />
                      <img src="https://www.kindmeal.my/images/icon_star.png" />
                      <img src="https://www.kindmeal.my/images/icon_star.png" />
                      <img src="https://www.kindmeal.my/images/icon_star.png" />
                    </div>
                    <p>{e.txt2}</p>
                  </div>
                  <div style={{ marginLeft: "40px" }}>
                    <img
                      style={{ height: "100px", width: "100px" }}
                      src={e.img}
                    />
                    <p>View Moments</p>
                  </div>
                </div>
              );
            })}
            <p style={{ fontSize: "25px" }}>Submit Your Review</p>
            <br />
            <p>
              Yes, we'd love to hear from you! If you've had the chance to try
              out this deal, please share your review and rating with the food
              lovers. You can even include a photo to spice it up! Your review
              will also be published under the KindMoments section at your
              profile and the shop's page.
            </p>
            <br />
            <label>Share Your Heart's and tummy's contents here"</label>{" "}
            <input placeholder="" />
            <br /> <button>Submit Review</button>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default MealDeal;
