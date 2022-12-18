import styled from "styled-components";

//Navbar

export const Nav = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  gap: 8.5%;
  margin-left: -1%;
`;

export const Logo = styled.img`
  height: 80px;
`;

export const Social = styled.img`
  height: 40px;
  width: 40px;
  margin-left: 15px;
`;

export const Facebook = styled.button`
  width: 80px;
  height: 30px;
  line-height: 20px;
  padding: 1px;
  background-color: #35619f;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  border-radius: 5px;
  color: #ffffff;
  border: #35619f;
`;

export const Email = styled.button`
  width: 80px;
  height: 30px;
  background-color: #666666;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  border-radius: 5px;
  color: #ffffff;
  border: #666666;
`;
export const Signup = styled.p`
  font-size: 12px;
  color: #444444;
  text-align: -webkit-center;
  border-collapse: separate;
  text-indent: initial;
  border-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  width: 50px;
  text-align: -webkit-right;
  border-left: 1px solid #cccccc;
  padding: 6px 0px;
`;

export const GreenBar = styled.div`
  width: 100%;
  height: 40px;
  background-color: #2bb673;
  display: flex;
  justify-content: center;
  gap: 1%;
`;

export const GreenLinks = styled.div`
  heigth: 100%;
  padding: 0px 22px;
  display: block;
`;

//--------------------------------------------------------------------------------------------------------------------------

//Footer

export const FooterLayout = styled.div`
  width: 100%;
  background-color: #2bb673;

  padding-top: 10px;
  padding-bottom: 10px;
  text-align: -webkit-center;
  color: #ffffff;

  left: 0;
  bottom: 0;
  width: 100%;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  gap: 40px;
  margin-bottom: 15px;
`;

export const Heddline = styled.p`
  font-weight: bold;
  color: #ffffff;
  border-collapse: separate;
  text-indent: initial;
  border-spacing: 2px;
  font-size: 14px;
`;

export const P = styled.p`
  border-collapse: separate;
  border-spacing: 2px;
  font-weight: normal;
  color: #eeeeee;
  font-size: 12px;
  font-weight: normal;
  line-height: 15px;
`;
export const Para = styled.p`
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #eeeeee;
`;

//Article page
export const ArticleHeader = styled.div`
  background-color: rgb(240, 240, 240);
  padding: 20px 200px 30px 200px;
  text-align: justify;
  border-spacing: 2px;
`;

export const Apara = styled.p``;
export const Ahedd = styled.h1`
  font-size: 28px;
  font-weight: normal;
  margin-bottom: 10px;
  color: #444444;
  text-align: left;
`;

export const Container = styled.div`
  margin-bottom: 40px;
  min-height: 300px;
  width: 72%;
  margin: auto;
  border: 1px solid #dddddd;
  padding: 0px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 0px 6px #e0e0e0;
  text-align: left;
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  display: flex;
`;

export const ATitle = styled.h1`
  text-align: justify;
  border-collapse: separate;
  text-indent: initial;
  border-spacing: 2px;
  font-size: 22px;
  font-weight: normal;
  color: rgb(68, 68, 68);
`;
export const APara = styled.p`
  color: #444444;
  text-align: justify;
  margin-bottom: 25px;
  border-collapse: separate;
  text-indent: initial;
  border-spacing: 2px;
  font-size: 14px;
`;
export const Date = styled.p`
  color: rgb(153, 153, 153);
  font-size: 14px;
  text-align: justify;
`;

export const AButton = styled.button`
  background-color: #d41f1f;
  display: block;
  height: 35px;
  width: 160px;
  line-height: 25px;
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  border-radius: 6px;
  background-color: #d41f1f;
  cursor: pointer;
  border: #d41f1f;
`;

export const AImg = styled.img`
  position: relative;
  width: 450px;
  height: 300px;
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 10px 10px 0px 0px;
  z-index: 300;
  object-fit: cover;
  object-position: center 40%;
`;

export const BImg = styled.div`
  border: 1px solid #dddddd;
  padding: 0px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 0px 6px #e0e0e0;
  width: 450px;
  min-height: 250px;
`;

//pagination

export const Pagination = styled.div`
  width: 68%;
  ${"" /* padding:0% 16%; */}
  display:flex;
  align-items: center;
  justify-content: space-between;

  margin: auto;
  margin-top: 50px;
`;

export const PButton = styled.button`
  width: 100px;
  height: 40px;
  line-height: 19px;
  background-color: #e8e8e8;
  color: #444444;
  font-size: 16px;
  font-weight: normal;
  padding: 8px 15px 8px 15px;
  text-align: center;
  xborder-bottom: 1px solid #999999;
  xbox-shadow: 0px 1px 2px #aaaaaa;
  border-radius: 6px;
  border: #e8e8e8;
  margin-top: -10px;
`;

export const PageNum = styled.p`
  margin-left: 30px;
  color: blue;
  display: flex;
  gap: 18px;
  margin-top: -15px;
`;

export const Num = styled.p`
  display: block;
  cursor: pointer;
  transition: transform 0.1s;
  &:active {
    background-color: #f8f8f8;
    border: 1px solid #e8e8e8;
    color: #666666;
    font-weight: bold;
    font-size: 14px;
    line-height: 25px;
    width: 18px;
    height: 22px;
    padding: 5px;
    margin-right: 5px;
    text-align: center;
    display: inline;
    transform: scale(1);
  }
`;

//onClick subpage

export const MainDiv = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 0px 6px #e0e0e0;
  width: 70%;
  margin: auto;
  padding: 20px;
  height: 800px;
  display: flex;
  flex-direction: column;
`;

export const Video = styled.iframe`
  background-color: rgba(20, 22, 26, 0.2);
  content: "";
  height: 500px;
  position: absolute;
  width: 70%;
  ${"" /* margin-bottom:1%; */}
`;

export const Phedd = styled.h1`
  margin-top: 55%;
  text-align: justify;
`;

export const ButtonBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 73%;
  margin: auto;
`;

export const KindContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 5%;
  padding: 0% 16%;
  height: 100%;
`;

export const MiniContainer = styled.div`
  width: 330px;
  border: 1px solid #dddddd;
  border-radius: 10px;
  background-color: #ffffff;
  color: #444444;
  font-size: 16px;
  text-align: left;
  border-top: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  ${"" /* padding-bottom:20px; */}
`;

export const RoundImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const MainImg = styled.img`
  width: 100%;
  height: 248px;
`;

export const SocialIcon = styled.img`
  -webkit-text-size-adjust: none;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  text-align: left;
  color: #888888;
  font-size: 15px;
  line-height: 13px;
  font-weight: normal;
  cursor: pointer;
  width: 23px;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
`;

export const MiniBox = styled.div`
  -webkit-text-size-adjust: none;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-size: 14px;
  border: 1px solid #dddddd;
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px #e0e0e0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;
