import React, { useState, useEffect } from 'react';
import styles from '../Auth/Lore.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Regist = () => {
  const [form, setForm] = useState({});

  const postData = () => {
    axios
      .post('https://hakatonmirbek1.herokuapp.com/api/account/register/', form)
      .then((data) => console.log(data));
  };

  const handlerChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className={styles.regist}>
      <img width={60} height={60} src="./img/logo.png" alt="" />
      <input
        onChange={(e) => handlerChange(e)}
        name="email"
        className={styles.inpt}
        placeholder="Email"
        type="email"
      />
      <input
        onChange={(e) => handlerChange(e)}
        name="username"
        className={styles.inpt}
        placeholder="Username"
        type="text"
      />
      <input
        onChange={(e) => handlerChange(e)}
        name="first_name"
        className={styles.inpt}
        placeholder="Firstname"
        type="text"
      />
      <input
        onChange={(e) => handlerChange(e)}
        name="second_name"
        className={styles.inpt}
        placeholder="Secondname"
        type="text"
      />
      <input
        onChange={(e) => handlerChange(e)}
        name="phone"
        className={styles.inpt}
        placeholder="Phone"
        type="tel"
      />
      <input
        onChange={(e) => handlerChange(e)}
        name="password"
        className={styles.inpt}
        placeholder="Password"
        type="password"
      />
      <input
        onChange={(e) => handlerChange(e)}
        name="password2"
        className={styles.inpt}
        placeholder="Password2"
        type="password"
      />
      <Link>
        <button onClick={() => postData()}>regist</button>
      </Link>
    </div>
  );
};

export default Regist;
