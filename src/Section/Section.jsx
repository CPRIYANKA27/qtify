// src/components/Section/Section.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card/Card";
import styles from "../Section/section.module.css";

const Section = ({ title, endpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(endpoint);
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, [endpoint]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <button className={styles.button} onClick={handleToggle}>
          {isCollapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {!isCollapsed && (
        <div className={styles.grid}>
          {albums.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
