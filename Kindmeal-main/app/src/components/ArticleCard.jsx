import React from "react";
import { Link } from "react-router-dom";
import { AButton, AImg, Apara, ATitle, BImg, Container, Date } from "./Styled";

const MapData = ({ id, title, imgURL, para, by, date }) => {
  return (
    <div>
      <Link
        to={`/articles/${id}`}
        style={{ textDecoration: "none", color: "#444444" }}
      >
        <Container>
          <BImg>
            <AImg src={imgURL} alt={id} />
          </BImg>
          <div style={{ padding: "20px" }}>
            <ATitle>{title}</ATitle>
            <br />
            <Apara style={{ fontSize: "14px", color: "#999999" }}>{by}</Apara>
            <br />
            <Apara style={{ fontSize: "14px", colro: "#999999" }}>{para}</Apara>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <AButton>View Video</AButton>
              <Date>{date}</Date>
            </div>
          </div>
        </Container>
      </Link>
      <br />
      <br />
    </div>
  );
};

export default MapData;
