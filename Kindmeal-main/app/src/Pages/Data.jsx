import React from "react";
import { useState } from "react";
const Data = () => {
  const [FormData, setFormData] = useState([]);
  const handleChange = (e) => {
    const inputName = e.target.name;

    setFormData({
      ...FormData,
      [inputName]: e.target.value,
    });
  };
  const post = async () => {
    try {
      let res = await fetch(`http://localhost:8080/recipe`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(FormData),
      });
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post();
    //    console.log(FormData)
    // navigate("/joinsuccess")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="img" onChange={handleChange}></input>
        <input type="text" name="name" onChange={handleChange}></input>
        <input type="text" name="title" onChange={handleChange}></input>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Data;
