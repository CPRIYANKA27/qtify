import React from "react";
import styles from "../Navbar/Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Navbar = ({ searchData }) => {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button text="Give Feedback" />
    </nav>
  );
};

export default Navbar;
