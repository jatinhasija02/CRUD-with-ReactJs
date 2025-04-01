import React, { useState } from "react";
import axios from "axios";
import Style from "./create.module.css";
const Create = () => {
  const [signup, setSignup] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(setSignup);
    if (setSignup) {
      axios.post("http://localhost:3000/users", signup).then(() => {
        alert("Data Send Successfully");
        setSignup({
          name: "",
          username: "",
          email: "",
          phone: "",
          dob: "",
        });
      });
    }
  };

  return (
    <>
      <div className={Style.container}>
        <h1 className={Style.h1}>Create Users</h1>
        <form onSubmit={handleSubmit}>
          <div className={Style.inputGroup}>
            <label htmlFor="name">Name: </label>
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              value={signup.name}
              onChange={handleChange}
            ></input>
          </div>
          <br />
          <div className={Style.inputGroup}>
            <label htmlFor="username">Username: </label>
            <input
              name="username"
              type="text"
              placeholder="Enter Your Name"
              value={signup.username}
              onChange={handleChange}
            ></input>
          </div>
          <br />
          <div className={Style.inputGroup}>
            <label htmlFor="email">Email: </label>
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              value={signup.email}
              onChange={handleChange}
            ></input>
          </div>
          <br />
          <div className={Style.inputGroup}>
            <label htmlFor="phone">Phone Number: </label>
            <input
              name="phone"
              type="phone"
              placeholder="Enter Your Phone Number"
              value={signup.phone}
              onChange={handleChange}
            ></input>
          </div>
          <br />
          <div className={Style.inputGroup}>
            <label htmlFor="dob">Date Of Birth: </label>
            <input
              name="dob"
              type="date"
              placeholder="Enter Your Date Of Birth"
              value={signup.dob}
              onChange={handleChange}
            ></input>
          </div>
          <br />
          <div className={Style.inputGroup}>
            <button type="submit" className={Style.submitButton}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
