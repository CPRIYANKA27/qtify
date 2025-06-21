import styles from "../Hero/Hero.module.css";
import heroImage from "../assets/hero_headphones.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className="Hero_HeroTitle">
        <h1> 100 Thousand Songs, ad-free </h1>
        <h1> Over thousands podcast episodes</h1>
      </div>
      <img src={heroImage} alt="Hero_Image" />
    </div>
  );
};

export default Hero;
