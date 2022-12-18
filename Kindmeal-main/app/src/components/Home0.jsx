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
        let res = await fetch(`http://localhost:8080/articles?_limit=5`);
        let data = await res.json();
        setData(data);
        // console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // console.log(data)
  }, []);
  return (
    <div className={style.box}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ fontSize: "20px" }}>Latest News & Videos</p>
        <p style={{ fontSize: "17px" }}>
          <a href="https://www.kindmeal.my/widget.htm">
            Save Lives with your Blogs
          </a>{" "}
           |  
          <a href="" onClick={() => navigate("/articles")}>
            News & Articles
          </a>{" "}
           |  
          <a href="https://www.facebook.com/KindMeal.my">Follow Our Facebook</a>
        </p>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {data.map((e) => {
          return (
            <Link
              to={`/articles/${e.id}`}
              style={{ textDecoration: "none", color: "#666666" }}
            >
              <div style={{ width: "200px", textAlign: "center" }} key={e.id}>
                <img src={e.imgURL} />
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "12px",
                    color: "#666666",
                  }}
                >
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
