import React, { useEffect, useState } from "react";
import axios from "axios";
import Style from "./read.module.css";
import { Link } from "react-router-dom";
const Read = () => {
  const [readData, setReadData] = useState([]);
  const [reFetch, setReFetch] = useState(false);

  useEffect(() => {
    async function getAllData() {
      let { data } = await axios.get("http://localhost:3000/users");
      setReadData(data);
    }
    getAllData();
  }, [reFetch]);

  async function deleteData(id) {
    try {
      axios.delete(`http://localhost:3000/users/${id}`);
      alert("Deleted Successfully");
      setReFetch(!reFetch);
    } catch (error) {
      alert("Unable to Delete");
      console.log(error);
    }
  }

  return (
    <div className={Style.container}>
      <h1 className={Style.title}>Read Data</h1>
      <main>
        {readData.map((users) => (
          <section key={users.id} className={Style.useCard}>
            <div className={Style.useInfo}>
              <h3>Name: {users.name}</h3>
              <h3>Username: {users.username}</h3>
              <h3>Email: {users.email}</h3>
              <h3>Phone Number: {users.phone}</h3>
              <h3>Date Of Birth: {users.dob}</h3>
            </div>
            <div className={Style.action}>
              <button className={`${Style.button} ${Style.editButton} `}>
                <Link to={`/update/${users.id}`}>Edit</Link>
              </button>
              <button
                onClick={() => deleteData(users.id)}
                className={`${Style.button} ${Style.deleteButton}`}
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

export default Read;
