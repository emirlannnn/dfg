import React, { useState } from 'react';
import styles from '../Main/Main.module.css';
import { Link } from 'react-router-dom';
function Main() {
  const [dataList, setDataList] = useState([]);

  const dataSettings = {
    dataList,
    setDataList,
  };
  return (
    <div>
      <div className={styles.header}>
        <img width={100} height={100} src="./img/logo.png" alt="" />
      </div>
      <div className={styles.fblock}>
        <img width={850} height={516} src="./img/left.png" alt="" />
        <img width={820} height={516} src="./img/right.png" alt="" />
        <p className={styles.find}>find your job here</p>
        <p className={styles.findt}>find employees here</p>
      </div>
      <Link className={styles.bot} to="/login">
        <button>Login </button>
      </Link>
      <Link className={styles.bot} to="/regist">
        <button>Regist</button>
      </Link>
    </div>
  );
}

export default Main;
