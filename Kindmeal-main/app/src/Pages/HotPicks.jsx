import { useEffect } from "react";
import { useState } from "react";
import Button from "../components/Button";
import style from "../Styles/HotPicks.module.css";
const HotpicFetching = () => {
  const [fdata, setFdata] = useState([]);
  const [f2data, setF2data] = useState([]);
  const [f3data, setF3data] = useState([]);
  const [f4data, setF4data] = useState([]);
  const [f5data, setF5data] = useState([]);
  const [f6data, setF6data] = useState([]);
  const [f7data, setF7data] = useState([]);
  const [f8data, setF8data] = useState([]);
  const [f9data, setF9data] = useState([]);
  const [f10data, setF10data] = useState([]);
  const get = async () => {
    let res1 = await fetch("http://localhost:8080/hotpicks1");
    let data1 = await res1.json();
    setFdata(data1);
    let res2 = await fetch("http://localhost:8080/hotpicks2");
    let data2 = await res2.json();
    setF2data(data2);
    let res3 = await fetch("http://localhost:8080/hotpicks3");
    let data3 = await res3.json();
    setF3data(data3);
    let res4 = await fetch("http://localhost:8080/hotpicks4");
    let data4 = await res4.json();
    setF4data(data4);
    let res5 = await fetch("http://localhost:8080/hotpicks5");
    let data5 = await res5.json();
    setF5data(data5);
    let res6 = await fetch("http://localhost:8080/hotpicks6");
    let data6 = await res6.json();
    setF6data(data6);
    let res7 = await fetch("http://localhost:8080/hotpicks7");
    let data7 = await res7.json();
    setF7data(data7);
    let res8 = await fetch("http://localhost:8080/hotpicks8");
    let data8 = await res8.json();
    setF8data(data8);
    let res9 = await fetch("http://localhost:8080/hotpicks9");
    let data9 = await res9.json();
    setF9data(data9);
    let res10 = await fetch("http://localhost:8080/hotpicks10");
    let data10 = await res10.json();
    setF10data(data10);
  };
  useEffect(() => {
    get();
  }, []);
  return (
    <div>
      <div className={style.fstdiv}>
        <div className={style.infstdiv}>
          <h1>
            All Categories | <span>Hot Picks</span>
          </h1>
        </div>
        <br />
        <div className={style.tag}>
          <p>
            Discover our food lover community's top picks. Easily locate tasty
            meat-free bargain deals, and get creative ideas for your gastronomic
            indulgence!
          </p>
          <br />
          <p>
            {" "}
            Click into a featured deal to instantly obtain free coupons, or read
            more on our members' delicious recommendations.
          </p>
        </div>
      </div>
      <div className={style.buttonhere}>
        <Button>All Categories</Button>
        <Button>Pasta</Button>
        <Button>Burger</Button>
        <Button>Breakfast</Button>
        <Button>Salad</Button>
        <Button>Bakery</Button>
        <Button>Tea & Dessert</Button>
        <Button>Local Delights</Button>
        <Button>Jap & Korean</Button>
        <Button>Chinese</Button>
        <Button>Indian</Button>
        <Button>Soup</Button>
        <Button>Cute</Button>
        <Button>DIY</Button>
      </div>

      <div className={style.mcd}>
        <div className={style.wrapper1}>
          <div className={style.div1}>
            <div className={style.divdiv}>
              <p>Pasta Fiesta</p>{" "}
              <div className={style.cardflex0}>
                <a href="">view pasta Deals</a>

                <a href=""> | View All Pasta Hot Picks</a>
              </div>
            </div>
            <br />
            <br />
            <div className={style.div1flexit}>
              {fdata.map((el) => (
                <div>
                  {" "}
                  <img id="divimg" src={el.img} alt=""></img>
                  <p>{el.txt}</p>
                  <h6>{el.txt}</h6>
                </div>
              ))}
            </div>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <br />

          <div className={style.div2grid}>
            {f2data.map((el) => (
              <div className={style.cardflex}>
                <img className={style.ima} src={el.img} alt=""></img>
                <div className={style.txtdiv}>
                  <div className={style.logodivflex}>
                    <img src={el.logo} className={style.logo} alt="" />
                    <p>{el.txt1}</p>
                  </div>
                  <br />
                  <p>{el.txt2}</p>
                  <br />
                  <a href="">{el.txt}</a>
                </div>
              </div>
            ))}
          </div>
          <br />
          <div className={style.lstdiv}>
            <a href="">View All Pasta Fiesta Hot Picks »</a>
          </div>
        </div>
        <br />
        {/* <br></br> */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className={style.wrapper1}>
          <div className={style.div1}>
            <div className={style.divdiv}>
              <p>Burger Bash</p>{" "}
              <div className={style.cardflex0}>
                <a href="">view Burger Deals</a>

                <a href=""> | View All Burger Hot Picks</a>
              </div>
            </div>
            <br />
            <br />
            <div className={style.div1flexit}>
              {f3data.map((el) => (
                <div>
                  {" "}
                  <img id="divimg" src={el.img} alt=""></img>
                  <p>{el.txt}</p>
                  <h6>{el.txt}</h6>
                </div>
              ))}
            </div>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <br />

          <div className={style.div2grid}>
            {f4data.map((el) => (
              <div className={style.cardflex}>
                <img className={style.ima} src={el.img} alt=""></img>
                <div className={style.txtdiv}>
                  <div className={style.logodivflex}>
                    <img src={el.logo} className={style.logo} alt="" />
                    <p>{el.txt1}</p>
                  </div>
                  <br />
                  <p>{el.txt2}</p>
                  <br />
                  <a href="">{el.txt}</a>
                </div>
              </div>
            ))}
          </div>
          <br />
          <div className={style.lstdiv}>
            <a href="">View All Burger Fiesta Hot Picks »</a>
          </div>
        </div>
        <br />
        {/* /////////////////////////////////////////////////////// */}
        <div className={style.wrapper1}>
          <div className={style.div1}>
            <div className={style.divdiv}>
              <p>Breakfast</p>{" "}
              <div className={style.cardflex0}>
                <a href="">view Breakfast Deals</a>

                <a href=""> | View All Breakfast Hot Picks</a>
              </div>
            </div>
            <br />
            <br />
            <div className={style.div1flexit}>
              {f5data.map((el) => (
                <div>
                  {" "}
                  <img id="divimg" src={el.img} alt=""></img>
                  <p>{el.txt}</p>
                  <h6>{el.txt}</h6>
                </div>
              ))}
            </div>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <br />

          <div className={style.div2grid}>
            {f6data.map((el) => (
              <div className={style.cardflex}>
                <img className={style.ima} src={el.img} alt=""></img>
                <div className={style.txtdiv}>
                  <div className={style.logodivflex}>
                    <img src={el.logo} className={style.logo} alt="" />
                    <p>{el.txt1}</p>
                  </div>
                  <br />
                  <p>{el.txt2}</p>
                  <br />
                  <a href="">{el.txt}</a>
                </div>
              </div>
            ))}
          </div>
          <br />
          <div className={style.lstdiv}>
            <a href="">View All Breakfast Fiesta Hot Picks »</a>
          </div>
        </div>
        <br />
        {/* /////////////////////////////////////////////////////////// */}
        <div className={style.wrapper1}>
          <div className={style.div1}>
            <div className={style.divdiv}>
              <p>Healthy Salad</p>{" "}
              <div className={style.cardflex0}>
                <a href="">view Salad Deals</a>

                <a href=""> | View All Salad Hot Picks</a>
              </div>
            </div>
            <br />
            <br />
            <div className={style.div1flexit}>
              {f7data.map((el) => (
                <div>
                  {" "}
                  <img id="divimg" src={el.img} alt=""></img>
                  <p>{el.txt}</p>
                  <h6>{el.txt}</h6>
                </div>
              ))}
            </div>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <br />

          <div className={style.div2grid}>
            {f8data.map((el) => (
              <div className={style.cardflex}>
                <img className={style.ima} src={el.img} alt=""></img>
                <div className={style.txtdiv}>
                  <div className={style.logodivflex}>
                    <img src={el.logo} className={style.logo} alt="" />
                    <p>{el.txt1}</p>
                  </div>
                  <br />
                  <p>{el.txt2}</p>
                  <br />
                  <a href="">{el.txt}</a>
                </div>
              </div>
            ))}
          </div>
          <br />
          <div className={style.lstdiv}>
            <a href="">View All Pasta Salad Hot Picks »</a>
          </div>
        </div>
        <br />
        {/* /////////////////////////////////////////////////////////////////////////// */}
        <div className={style.wrapper1}>
          <div className={style.div1}>
            <div className={style.divdiv}>
              <p>High Tea & Deserts</p>{" "}
              <div className={style.cardflex0}>
                <a href="">view Tea Deals</a>

                <a href=""> | View All Tea & Deserts Hot Picks</a>
              </div>
            </div>
            <br />
            <br />
            <div className={style.div1flexit}>
              {f9data.map((el) => (
                <div>
                  {" "}
                  <img id="divimg" src={el.img} alt=""></img>
                  <p>{el.txt}</p>
                  <h6>{el.txt}</h6>
                </div>
              ))}
            </div>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <br />

          <div className={style.div2grid}>
            {f10data.map((el) => (
              <div className={style.cardflex}>
                <img className={style.ima} src={el.img} alt=""></img>
                <div className={style.txtdiv}>
                  <div className={style.logodivflex}>
                    <img src={el.logo} className={style.logo} alt="" />
                    <p>{el.txt1}</p>
                  </div>
                  <br />
                  <p>{el.txt2}</p>
                  <br />
                  <a href="">{el.txt}</a>
                </div>
              </div>
            ))}
          </div>
          <br />
          <div className={style.lstdiv}>
            <a href="">View All Tea & Deserts Fiesta Hot Picks »</a>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default HotpicFetching;
