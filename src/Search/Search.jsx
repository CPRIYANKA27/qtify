import React from "react";
import styles from "./Search.module.css";
import searchIcon from "../assets/searchIcon.svg";

const Search = ({ placeholder }) => {
  return (
    <div className={styles.searchField}>
      <input type="text" placeholder={placeholder} />
      <div>
        <img src={searchIcon} alt="search icon" />
      </div>
    </div>
  );
};

export default Search;
