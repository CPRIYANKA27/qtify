import React from "react";
import Chip from "@mui/material/Chip";
import styles from "../card/card.module.css";
// src/components/Card/Card.jsx

const Card = ({ image, title, follows }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.bottom}>
        <Chip
          label={`${follows} Follows`}
          size="small"
          className={styles.chip}
        />
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
};

export default Card;
