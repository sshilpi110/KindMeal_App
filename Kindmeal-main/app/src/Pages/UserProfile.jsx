import React, { useEffect, useState } from "react";
import Progress from "../components/Progress";
import style from "../Styles/UserProfile.module.css";

const UserProfile = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/formData")
      .then((res) => res.json())
      .then((data) => setShow(data))
      .catch((er) => console.log(er));
  }, []);
  // console.log(show);

  return (
    <div className={style.userProfile}>
      {show.map((item) => (
        <div>
          <div className={style.head_div}>
            <img
              src="https://www.kindmeal.my/images/default_member_cover-1.jpg"
              alt="banner"
            />
            {/* https://www.kindmeal.my/images/default_member_cover-3.jpg */}

            <div className={style.username_div} key={item.id}>
              <div>
                <h1>{item.username}</h1>
                <span className={style.dot}>&#8226;</span>
                <h2 style={{ marginTop: "-5px" }}>0 Followers</h2>
              </div>
              <div className={style.share_btn_div}>
                <button>Share KindMoment</button>
                <button>Share Recipe</button>
              </div>
            </div>
          </div>

          <div className={style.user}>
            <div className={style.user_img}>
              <img src={item.photo} alt="user-images" />
            </div>
            <div className={style.head_btn_div}>
              <button>Edit Headshot</button>
              <button>Edit Cover Photo</button>
            </div>
          </div>

          <div className={style.progress_div}>
            <div className={style.progress_child}>
              <h4 className={style.lives_saved}>
                Lives Saved
                <span className={style.question_mark}>&#63;</span>
              </h4>
              <h1>0</h1>
            </div>
            <div>
              <div className={style.flex}>
                <h4 className={style.lives_saved}>
                  Power Level : 1 XP
                  <span className={style.question_mark}>&#63;</span>
                </h4>
              </div>
              <br />
              <div className={`${style.flex} ${style.prog}`}>
                <Progress />
                <div className={style.color_div}>
                  <div className={style.color}></div>
                  <label> Delicious Deals: 0 XP</label>
                  <div className={`${style.color} ${style.color2}`}></div>
                  <label>Yummy Moments: 0 XP</label>
                  <div className={`${style.color} ${style.color3}`}></div>
                  <label> Interactions: 0 XP</label>
                  <div className={`${style.color} ${style.color4}`}></div>
                  <label> Social Buzz: 1 XP</label>
                </div>
              </div>
            </div>

            <div>
              <h4 className={style.lives_saved}>
                Superhero Rank
                <span className={style.question_mark}>&#63;</span>
              </h4>{" "}
              <br />
              <div className={style.batman_div}>
                <img
                  src="https://www.kindmeal.my/images/minion-batman-thumb.png"
                  alt="super hero"
                />
                <div className={style.bat_lavel}>
                  <h4 style={{ marginBottom: "5px" }}>Batman</h4>
                  <h5>Level 1</h5>
                  <br />
                  <p>Earn 49 XP more to transform into Captain America!</p>
                  <br />
                  <div className={style.Share_tweet}>
                    <button style={{ backgroundColor: "#666666" }}>
                      {" "}
                      <img
                        src="https://www.kindmeal.my/images/icon_button_fb.png"
                        alt="fb"
                      />
                      Share
                    </button>
                    <button>
                      <img
                        src="https://www.kindmeal.my/images/icon_button_twitter.png"
                        alt="tw"
                      />
                      Tweet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${style.flex} ${style.profile_main}`}>
            <div>
              <h3>Personal Profile</h3>
              <br />
              <div className={style.grid}>
                <div>
                  <h5>Name</h5>
                  <h5>Gender</h5>
                  <h5>Member Since</h5>
                  <h5>Location</h5>
                </div>
                <div>
                  <h5>{item.firstName}</h5>
                  <h5>{item.gender}</h5>
                  <h5>2020</h5>
                  <h5>{item.state}</h5>
                </div>
              </div>
            </div>
            <div>
              <h3>
                About <span className={style.about_span}>{item.firstName}</span>
              </h3>
              <br />
              <p>
                We're as excited as you are to find out more about debobrota,
                but this info has not been completed yet.
              </p>
              <br />
              <p>Please check back again later.</p>
            </div>
          </div>
        </div>
      ))}
      <br />
      <br />
    </div>
  );
};

export default UserProfile;
