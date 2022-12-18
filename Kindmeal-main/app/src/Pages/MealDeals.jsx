import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../Styles/MealDeals.module.css";

const MealDeals = () => {
  const [count, setCount] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState();
  const [show, setShow] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:8080/mealDeals?_page=${count}&_limit=8`)
      .then((res) => res.json())
      .then((data) => setShow(data))
      .catch((er) => console.log(er));
  }, [count]);

  // console.log(show);

  const handleSearch = (e) => {
    if (e.target.value === "") {
      fetch(`http://localhost:8080/mealDeals?_page=${count}&_limit=8`)
        .then((res) => res.json())
        .then((data) => setShow(data))
        .catch((er) => console.log(er));
    } else {
      const newShow = show.filter((item) =>
        item.title.includes(e.target.value)
      );
      const newShow2 = show.filter((item) =>
        item.name.includes(e.target.value)
      );

      setShow([...newShow, ...newShow2]);
    }
  };

  const getFilteredList = () => {
    if (!selectedCategory) {
      return show;
    }
    return show.filter((item) => {
      return item.catagory === selectedCategory;
    });
  };

  var filteredList = useMemo(getFilteredList, [selectedCategory, show]);

  function handleCategoryChange(event) {
    if (event.target.value === "") {
      return show;
    } else {
      setSelectedCategory(event.target.value);
    }
  }
  return (
    <div>
      <div className={style.ynews}>
        <div className={style.mar}>
          <h2>
            Meat-Free Deals
            <span className={style.heading_span}>
              | Restaurants In Malaysia
            </span>
          </h2>
          <br />
          <p>
            Browse delicious meat-free, vegetarian deals from top restaurants
            and cafes! Just click on "Get Free Coupon" to obtain instant
            discounts and dine at the restaurants. No upfront payment, booking
            or printing is needed. If you share it on social media, you'll even
            DOUBLE your discount!
          </p>
          <br />
          <p>
            Download our <span> mobile app</span> now to easily get coupons and
            start dining in a few seconds. Effortlessly save lives, health,
            environment and money now!
          </p>
          <br />
          <br />
        </div>
        <div className={style.flex}>
          <input
            type="text"
            placeholder="Search Shop or Deal Name"
            className={style.input_box}
            onChange={handleSearch}
          />
          <select
            id="select"
            className={style.select}
            onChange={handleCategoryChange}
            name="category-list"
          >
            <option value="">All Categories</option>
            <option value="Pasta">Pasta</option>
            <option value="Burger">Burger</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Bakery">Bakery</option>
            <option value="Cute">Cute</option>
            <option value="Tea & Desserts"> Tea & Desserts</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Soup">Soup</option>
            <option value="Salads">Salads</option>
          </select>

          <select id="select" className={style.select} name="Location">
            <option value="All Locations">All Locations</option>
            <option value="Klang vally">Klang vally</option>
            <option value="Kualalumpur">Kualalumpur</option>
            <option value="Petaling Jaya">Petaling Jaya</option>
            <option value="Ipoh">Ipoh</option>
            <option value="Bangsar">Bangsar</option>
            <option value="Cheras">Cheras</option>
            <option value="Perek">Perek</option>
            <option value="Sepang">Sepang</option>
            <option value="Taman Desa">Taman Desa</option>
            <option value="Subang">Subang</option>
          </select>

          <button className={style.search_btn}>Search Deals</button>
          <button onClick={() => navigate("/directory")} className="addShop">
            Browse Resturents
          </button>
        </div>
      </div>
      <img
        src="https://www.kindmeal.my/images/ads/banner_ekoeko-1100x280.jpg"
        alt="addvertise"
        className={style.addvertise}
      />
      <br />
      {filteredList.length > 7 ? (
        <div className={style.pagination}>
          <div className={style.pageNum}>
            <p>Page : </p>
            <p onClick={() => setCount(1)}>1</p>
            <p onClick={() => setCount(2)}>2</p>
            <p onClick={() => setCount(3)}>3</p>
            <p onClick={() => setCount(4)}>4</p>
            <p onClick={() => setCount(5)}>5</p>
            <p onClick={() => setCount(6)}>6</p>
            <p onClick={() => setCount(7)}>7</p>
            <p onClick={() => setCount(8)}>8</p>
            <p onClick={() => setCount(9)}>9</p>
            <p onClick={() => setCount(10)}>10</p>
          </div>
          <button onClick={() => setCount(count + 1)}>Next &raquo; </button>
        </div>
      ) : (
        <div></div>
      )}
      <br />
      <div className={style.grid}>
        {filteredList.map((item) => (
          <Link
            to={`/deals/${item.id}`}
            style={{ textDecoration: "none", color: "#444444" }}
          >
            <div className={style.map_main} key={item.id}>
              <img
                src={item.img}
                alt="mealDeal"
                className={style.meal_deal_img}
              />
              <h4 className={style.off}>{item.off}</h4>
              <h3 className={style.title}>{item.title}</h3>
              <br />
              <div className={style.resturent_div}>
                <p className={style.res_name}>
                  {item.name}
                  <span className={style.res_address}>{item.address}</span>
                </p>
              </div>
              <br />
              <p className={style.description}>{item.desc}</p>
              <br />
              <div className={style.btn_str}>
                <button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Get FREE Coupon
                </button>
                <div>
                  <img src={item.strImg} alt="stars" />
                  <img src={item.strImg} alt="stars" />
                  <img src={item.strImg} alt="stars" />
                  <img src={item.halfstr} alt="stars" />
                  <img src={item.emptyStr} alt="stars" />
                  <p>({item.Like})</p>
                </div>
              </div>

              <div className={style.bottom_div}>
                <div>
                  <img src={item.eggContain} alt="egg" />
                  <img src={item.dairyContain} alt="egg" />
                  <img src={item.alcoContain} alt="egg" />
                </div>
                <div>
                  <p>KindMeal Discount</p>
                  <p className={style.discount}>{`${item.off2} Off`}</p>
                </div>
                <div>
                  <p>Expires In</p>
                  <p className={style.expire}>{item.expire}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <br />
      <br />
      <br />
      >br/>
      <img
        src="https://www.kindmeal.my/images/how_kindmeal_works.png"
        alt="download app"
        className={style.addvertise}
      />
    </div>
  );
};

export default MealDeals;
