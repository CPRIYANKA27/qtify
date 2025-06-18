/*import navbarStyles from "../Navbar/Navbar.module.css";

const Button = ({ text, eventHandler }) => {
  return (
    <div>
      <button
        className={navbarStyles.feedback}
        onClick={(e) =>
          eventHandler.event === "onClick" && eventHandler.handler(e)
        }
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
*/
import styles from "../Button/Button.module.css";

const Button = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default Button;
