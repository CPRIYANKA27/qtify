import React from "react";
import styles from "./Logo.module.css";
import logo from "../assets/logo.svg";

const Logo = () => {
  return <img className={styles.img} src={logo} alt="qtify logo" />;
};

export default Logo;
