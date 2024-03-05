import React from "react";
import styles from "./button.module.css";

const CustomButton = ({ variant, text }) => {
  const variants = {
    green: "button-green",
    filledBlue: "button-blue",
    outlinedBlue: "button-blue-outline",
    outlinedGrey: "button-grey-outline",
  };

  return (
    <button className={`${styles.linkedinButton} ${styles[variants[variant]]}`}>
      <span>{text}</span>
    </button>
  );
};

export default CustomButton;
