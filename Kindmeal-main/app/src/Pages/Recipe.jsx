import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../Styles/Recip.module.css";
const Recipe = () => {
  const [show, setShow] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8080/recipeData/${id}`)
      .then((res) => res.json())
      .then((data) => setShow(data))
      .catch((er) => console.log(er));
  }, []);

  return (
    <div>
      <div>
        <div className={style.head_div}>
          <img
            src="https://www.kindmeal.my/photos/member/14/14169-c.jpg"
            alt="banner"
          />

          <div className={style.username_div} key={show.id}>
            <div>
              <h1>
                {" "}
                <img src="https://www.kindmeal.my/images/icon_star.png" />
                {show.author}
              </h1>
              <span className={style.dot}>&#8226;</span>
              <h2> Lifestyle Ambassador</h2>
              <span className={style.dot}>&#8226;</span>
              <h2>7 Followers</h2>
            </div>
            <div className={style.share_btn_div}>
              <button>Follow Member</button>
              <button>Contact Number</button>
            </div>
          </div>
        </div>

        <div className={style.user}>
          <div className={style.user_img}>
            <img src={show.logo} alt="user-images" />
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
                <p>Time</p>
                <br />
                <p style={{ color: "#333333" }}>1 Hr</p>
              </div>
              <div className={style.inner}>
                <p>Servings</p>
                <br />
                <p style={{ color: "#333333" }}>Depends</p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className={style.inner}>
                <p>
                  {" "}
                  Diet Restriction{" "}
                  <img src="https://www.kindmeal.my/images/icon_help.png" />
                </p>
              </div>
              <div className={style.inner}>
                <p>Ratings</p>
                <div style={{ display: "flex" }}>
                  <img src="https://www.kindmeal.my/images/icon_star.png" />
                  <img src="https://www.kindmeal.my/images/icon_star.png" />
                  <img src="https://www.kindmeal.my/images/icon_star.png" />
                  <img src="https://www.kindmeal.my/images/icon_star.png" />
                  <img src="https://www.kindmeal.my/images/icon_star.png" />
                  <img src="https://www.kindmeal.my/images/icon_star.png" />
                </div>
                <p style={{ color: "#333333" }}>5 Votes</p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className={style.btn}>Like </div>
              <p style={{ marginTop: "5px" }}>
                {" "}
                Like this recipe & share with friends!
              </p>
              <div className={style.share}>
                <img src="https://www.kindmeal.my/images/share_facebook.png" />
                <img src="https://www.kindmeal.my/images/share_twitter.png" />
              </div>
            </div>
          </div>
        </div>
        <div className={style.child_div}>
          <div className={style.inner1}>
            <p>Secret ingredients</p>
            <ul>
              <li>4 cups all-purpose flour</li>
              <li>2 teaspoons baking soda</li>
              <li>1 teaspoon salt</li>
              <li>2 cups sugar, divided</li>
              <li>1/2 cup vegetable oil</li>
              <li> eggs</li>
              <li>2 cups buttermilk</li>
              <li>1/2 cup raisins</li>
              <li>3 teaspoons ground cinnamon</li>
            </ul>
          </div>
          <div className={style.inner1}>
            <p>Direction</p>
            <ol>
              <li>
                In a large bowl, combine the flour, soda and salt. I a mixing
                bowl, beat 1-1/2 cups sugar and oil. Beat in eggs and buttermilk
                until combined. Stir into dry ingredients just until moistened.
                Fold in raisins. Combine cinnamon and remaining sugar; set
                aside.
              </li>
              <li>
                Spoon half of the better into two greased 8-in x 4-in x 2-in
                loaf pans. Sprinkle with half of the reserved cinnamon-sugar
                mixture; repeat layers. Cut through batter with a knife to
                swirl. Bake at 350 degrees for 55-60 minutes or until a
                toothpick inserted near the center comes out clean. Cool in pans
                for 10 minutes before removing from pans to wire racks.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div style={{ width: "70%", margin: "auto" }}>
        <img src="https://www.kindmeal.my/images/ads/banner_ekoeko-1100x280.jpg" />
      </div>{" "}
      <br />
      <br />
    </div>
  );
};

export default Recipe;
