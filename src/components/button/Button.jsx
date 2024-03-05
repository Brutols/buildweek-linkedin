import React from "react";
import styles from "./button.module.css";

const CustomButton = ({ variant }) => {
  const variants = {
    green: "button-green",
    filledBlue: "button-blue",
    outlinedBlue: "button-blue-outline",
    outlinedGrey: "button-grey-outline",
  };

  return (
    <button className={`${styles.linkedinButton} ${styles[variants[variant]]}`}>
      <span>Add profile section</span>
    </button>
  );
};

export default CustomButton;
