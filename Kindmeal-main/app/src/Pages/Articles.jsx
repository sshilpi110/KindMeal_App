import React, { useState, useEffect } from "react";
import MapData from "../components/ArticleCard";
import {
  ArticleHeader,
  Ahedd,
  Apara,
  Pagination,
  PButton,
  PageNum,
  Num,
} from "../components/Styled";

const Articles = () => {
  const [data, setData] = React.useState([]);

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(
          `http://localhost:8080/articles?_page=${pageNumber}&_limit=5`
        );
        let data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [pageNumber]);

  return (
    <>
      <ArticleHeader>
        <Ahedd>Yummy News, Articles & Videos</Ahedd>
        <Apara>
          Want to keep updated on the latest news of delicious meat-free meals
          and adorable animals? Check out this section for interesting daily
          happenings and articles that will melt your tummy (and heart too).
        </Apara>
        <Apara>
          {" "}
          You can also follow our Facebook Page or Twitter for more news and
          updates.
        </Apara>
      </ArticleHeader>

      <Pagination>
        <p>Page : </p>
        <PageNum>
          <Num onClick={() => setPageNumber(1)}>1</Num>
          <Num onClick={() => setPageNumber(2)}>2</Num>
          <Num onClick={() => setPageNumber(3)}>3</Num>
          <Num onClick={() => setPageNumber(4)}>4</Num>
          <Num onClick={() => setPageNumber(5)}>5</Num>
          <Num onClick={() => setPageNumber(6)}>6</Num>
          <Num onClick={() => setPageNumber(7)}>7</Num>
          <Num onClick={() => setPageNumber(8)}>8</Num>
          <p>...</p>
          <Num onClick={() => setPageNumber(10)}>10</Num>
        </PageNum>
        <div style={{ display: "flex", gap: "10px" }}>
          <PButton
            onClick={() => setPageNumber(pageNumber - 1)}
            style={{ marginLeft: "420px" }}
          >
            « Prev
          </PButton>
          <PButton onClick={() => setPageNumber(pageNumber + 1)}>
            Next »
          </PButton>
        </div>
      </Pagination>
      <br />

      {data.map((data) => (
        <MapData key={data.id} {...data} />
      ))}
    </>
  );
};

export default Articles;
