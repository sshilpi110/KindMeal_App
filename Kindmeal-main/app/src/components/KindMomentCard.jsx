import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  RoundImg,
  Para,
  MainImg,
  AButton,
  MiniContainer,
  SocialIcon,
} from "./Styled";

const MapKindMeals = (data) => {
  return (
    <Link
      to={`/kindmoments/${data.id}`}
      style={{ textDecoration: "none", color: "#444444" }}
    >
      <MiniContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RoundImg src={data.authorimg} alt={data.name} />
            <div>
              <p
                style={{
                  color: "#666666",
                  fontSize: "15px",
                  fontWeight: "800",
                }}
              >
                {data.authorname}
              </p>
              <Para style={{ color: "#aaaaaa" }}>{data.date}</Para>
            </div>
          </div>

          <AButton style={{ width: "80px" }}>view</AButton>
        </div>
        <MainImg src={data.img} alt={data.name} />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            padding: "5px",
            height: "35px",
            gap: "50px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <SocialIcon src="https://www.kindmeal.my/images/icon_heart_darkgrey.svg" />
            <p style={{ fontSize: "20px" }}>{data.Like}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <SocialIcon src="https://www.kindmeal.my/images/icon_camera_darkgrey.png" />
            <p style={{ fontSize: "20px" }}>{data.camera}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <SocialIcon src="https://www.kindmeal.my/images/icon_comment_darkgrey.png" />
            <p style={{ fontSize: "20px" }}>{data.Comment}</p>
          </div>
        </div>

        <div style={{ padding: "10px 15px" }}>
          <img
            style={{ width: "20px", height: "19px" }}
            src="https://www.kindmeal.my/images/icon_star.png"
            alt=""
          />
          <img
            style={{ width: "20px", height: "19px" }}
            src="https://www.kindmeal.my/images/icon_star.png"
            alt=""
          />
          <img
            style={{ width: "20px", height: "19px" }}
            src="https://www.kindmeal.my/images/icon_star.png"
            alt=""
          />
          <img
            style={{ width: "20px", height: "19px" }}
            src="https://www.kindmeal.my/images/icon_star.png"
            alt=""
          />
          <img
            style={{ width: "20px", height: "19px" }}
            src="https://www.kindmeal.my/images/icon_star.png"
            alt=""
          />
        </div>
        <p style={{ padding: "10px 15px" }}>{data.description}</p>
        <hr />
      </MiniContainer>
    </Link>
  );
};

export default MapKindMeals;
