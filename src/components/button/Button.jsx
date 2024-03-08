import React from "react";
import styles from "./button.module.css";
import ButtonIcon from "../buttonIcon/ButtonIcon";
const CustomButton = ({ variant, text,iconName,className }) => {
  const variants = {
    green: "button-green",
    filledBlue: "button-blue",
    outlinedBlue: "button-blue-outline",
    outlinedGrey: "button-grey-outline",
  };

  return (
    <button className={`${styles.linkedinButton} ${styles[variants[variant]]} ${styles[className]}`}>
      { iconName ? <span><ButtonIcon iconName={iconName}/></span> : ''}
      <span>{text}</span>
    </button>
  );
};

export default CustomButton;
