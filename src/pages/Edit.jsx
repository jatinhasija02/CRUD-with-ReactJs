import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./createuser.module.css";

const Edit = () => {
  let { id } = useParams();
  const [edit, setEdit] = useState({});

  useEffect(() => {
    async function getEdituser() {
      let { data } = await axios.get(`http://localhost:4042/users/${id}`);
      setEdit(data);
    }
    getEdituser();
  }, [id]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setEdit({ ...edit, [name]: value });
  };

  let navigate = useNavigate();

  let formSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4042/users/${id}`, edit);
      toast.success("user updated");
      navigate("/");
    } catch (error) {
      toast.error("user not updated");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={formSubmit}>
        <div className={styles.inputGroup}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={edit.username}
              onChange={handleChange}
            />
          </label>
        </div>

        <br />

        <div className={styles.inputGroup}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={edit.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <br />

        <div className={styles.inputGroup}>
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={edit.password}
              onChange={handleChange}
            />
          </label>
        </div>

        <br />

        <div className={styles.inputGroup}>
          <label>
            Date of birth:
            <input
              name="dob"
              type="date"
              value={edit.dob}
              onChange={handleChange}
            />
          </label>
        </div>

        <br />

        <div>
          <button type="sumbit" className={styles.submitButton}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
