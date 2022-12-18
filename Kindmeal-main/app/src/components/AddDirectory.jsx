import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Directory.css";

const AddDirectory = () => {
  const navigate = useNavigate();
  const [formdata, setformdata] = React.useState({});
  const handleChange = (e) => {
    let inputName = e.target.name;

    setformdata({ ...formdata, [inputName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendata(formdata);
    navigate(-1);
  };

  const sendata = (formdata) => {
    fetch(`http://localhost:8080/directory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div className="ynews">
        <div id="mar">
          <h5>Add Vegetarian / Vegan Shop</h5>
          <br />
          <p id="mar1">
            Know of a vegetarian or vegan shop not featured in our directory?
            List it now to share with more food lovers and encourage meat-free
            dining!
          </p>

          <p id="mar1">
            If you are the restaurant owner,{" "}
            <span id="b2s">join KindMeal </span>as a merchant now to feature
            your vegetarian promotions for FREE.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <h3>Shop Information</h3>
          <div className="flex input-child">
            <label htmlFor="">Shop Name</label>
            <input type="text" onChange={handleChange} name="name" />
          </div>
          <div className="flex input-child">
            <label htmlFor="" style={{ marginTop: "20px" }}>
              Shop Address
            </label>
            <div className="block-div">
              <p>Full address, including zip, city & state</p>
              <input type="text" onChange={handleChange} name="address" />
            </div>
          </div>
          <div className="flex input-child">
            <label htmlFor="">Phone (optional)</label>
            <input type="text" onChange={handleChange} name="phone" />
          </div>
          <div className="flex input-child">
            <label htmlFor="">Shop Email (Optional)</label>
            <input type="text" onChange={handleChange} name="email" />
          </div>
          <div className="flex input-child">
            <label htmlFor="">Opening Hours(Optional)</label>
            <div className="block-div">
              <p>Example: Mon - Fri: 10am - 9pm; Sat - Sun: 10am - 10pm</p>
              <input type="text" onChange={handleChange} name="opening" />
            </div>
          </div>
          <div className="flex input-child">
            <label htmlFor="">Website / Facebook</label>
            <input type="text" onChange={handleChange} name="map" />
          </div>
          <div className="flex input-child">
            <label htmlFor="">About The Shop(Optional)</label>
            <div className="block-div">
              <p>Brief description of what the shop offers</p>
              <textarea
                type="text"
                onChange={handleChange}
                name="description"
              />
            </div>
          </div>
          <button className="submit-listing">Submit Listing</button>
        </div>
      </form>
    </div>
  );
};

export default AddDirectory;
