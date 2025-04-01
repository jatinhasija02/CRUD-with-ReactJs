import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Style from "./create.module.css";
import axios from "axios";

const Update = () => {
  let { id } = useParams();
  const [edit, setEdit] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  useEffect(() => {
    async function editData() {
      let { data } = await axios.get(`http://localhost:3000/users/${id}`);
      setEdit(data);
    }
    editData();
  }, [id]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setEdit({ ...edit, [name]: value });
  };

  let navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/users/${id}`, edit);
      alert("Data Updated Successfully");
      navigate("/read");
    } catch (error) {
      alert("Unable to Update Data");
      console.log(error);
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
              value={edit.name}
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
              value={edit.username}
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
              value={edit.email}
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
              value={edit.phone}
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
              value={edit.dob}
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

export default Update;
