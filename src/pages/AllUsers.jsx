import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./allusers.module.css";
import axios from "axios";
import toast from "react-hot-toast";

const AllUsers = () => {
  const [allusers, setAllusers] = useState([]);
  const [reFetch, setReFetch] = useState(false);

  useEffect(() => {
    async function getAllRegistredUser() {
      let { data } = await axios.get("http://localhost:4042/users");
      console.log(data);
      setAllusers(data);
    }
    getAllRegistredUser();
  }, [reFetch]);

  async function deleteUser(id) {
    try {
      axios.delete(`http://localhost:4042/users/${id}`);
      toast.success("deleted Successfully");
      setReFetch(!reFetch);
    } catch (error) {
      toast.error("unable to delete");
    }
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>ALL USERS</h1>
      <main>
        {allusers.map((user) => (
          <section key={user.id} className={style.userCard}>
            <div className={style.userInfo}>
              <h2>Name:{user.username}</h2>
              <h2>Email:{user.email}</h2>
              <h2>Password:{user.password}</h2>
              <h2>Date of Birth:{user.dob}</h2>
            </div>
            <div className={style.action}>
              <button className={`${style.button} ${style.editbutton}`}>
                <Link to={`/edit/${user.id}`}>Edit</Link>
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                className={`${style.button} ${style.editbutton}`}
              >
                Delete
              </button>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default AllUsers;
