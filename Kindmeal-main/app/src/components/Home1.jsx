import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import style from "../Styles/Home.module.css";
const ListHead = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
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
  }, []);
  return (
    <div className={style.box}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ fontSize: "20px" }}>Discover Restaurants</p>
        <p style={{ fontSize: "17px" }}>
          <a href="" onClick={() => navigate("/directory")}>
            Vegiterian Directory
          </a>{" "}
           |  
          <a href="" onClick={() => navigate("/recipes")}>
            Restaurant Menu
          </a>{" "}
           |  <a href="https://www.kindmeal.my/foodmap.htm">Food Map</a>
        </p>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {data.map((e) => {
          return (
            <Link
              to={`/recipes/${e.id}`}
              style={{ textDecoration: "none", color: "#444444" }}
            >
              <div style={{ width: "190px", textAlign: "center" }} key={e.id}>
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
  );
};

export default ListHead;
