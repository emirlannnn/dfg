import React, { useState } from 'react';
import styles from '../Auth/Lore.module.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className={styles.log}>
      <img width={60} height={60} src="./img/logo.png" alt="" />
      <input className={styles.inpt} placeholder="Username" type="text" />
      <input className={styles.inpt} placeholder="Password" type="password" />
      <Link>
        <button>Log in</button>
      </Link>
    </div>
  );
}
export default Login;
