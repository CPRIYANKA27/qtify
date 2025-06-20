import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Card from "../card/Card";
import styles from "./section.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Section = ({ title, endpoint }) => {
  const [albums, setAlbums] = useState([]);
  const scrollRef = useRef(null);

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

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 180 * 3.5; // Adjust to scroll ~3.5 cards per click
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <button className={styles.showAll}>Show all</button>
      </div>

      <div className={styles.carouselContainer}>
        <button className={styles.arrow} onClick={() => scroll("left")}>
          <FaArrowLeft />
        </button>

        <div className={styles.carousel} ref={scrollRef}>
          {albums.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          ))}
        </div>

        <button className={styles.arrow} onClick={() => scroll("right")}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Section;
