import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import styles from "./createuser.module.css";

const CreateUser = () => {
  const [signUpUser, setSignUpUser] = useState({
    username: "",
    email: "",
    password: "",
    dob: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setSignUpUser({ ...signUpUser, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUpUser);
    if (signUpUser) {
      axios.post("http://localhost:4042/users", signUpUser).then(() => {
        console.log("send data successfully");
        toast.success("Data Send Successfully");

        setSignUpUser({
          username: "",
          email: "",
          password: "",
          dob: "",
        });
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={signUpUser.username}
              onChange={handleChange}
            />
          </label>
        </div>

        <br />

        <div className={styles.inputGroup}>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={signUpUser.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <br />

        <div className={styles.inputGroup}>
          <label htmlFor="password">
            Password:
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              value={signUpUser.password}
              onChange={handleChange}
            />
          </label>
        </div>

        <br />

        <div className={styles.inputGroup}>
          <label htmlFor="dob">
            Date of birth:
            <input
              name="dob"
              type="date"
              placeholder="Enter date of birth"
              value={signUpUser.dob}
              onChange={handleChange}
            />
          </label>
        </div>

        <br />

        <div className={styles.inputGroup}>
          <button type="sumbit" className={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
