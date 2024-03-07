import React from "react";
import { IoHome } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";
import { FaBell } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { Nav } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./buttonIcon.module.css"
import Headings from "../headings/Headings";
import ProfilePic from "../profilePic/ProfilePic";
import { FaPlus } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi2";

const ButtonIcon = ({ iconName, text, isDropdown, isProfile }) => {
  const selectIcon = () => {
    switch (iconName) {
      case "IoHome":
        return <IoHome className={styles.icon} />;
      case "FaUserFriends":
        return <FaUserFriends className={styles.icon} />;
      case "FaSuitCase":
        return <FaSuitcase className={styles.icon} />;
      case "HiMiniChatBubbleLeftEllipsis":
        return <HiMiniChatBubbleLeftEllipsis className={styles.icon} />;
      case "FaBell":
        return <FaBell className={styles.icon} />;
      case "CgMenuGridR":
        return <CgMenuGridR className={styles.icon} />;
      case "FaPlus":
        return <FaPlus className={styles.icon} />;
      case "HiOutlinePencil":
        return <HiOutlinePencil className={styles.icon} />;
      default:
        return <div>seleziona un icona</div>;
    }
  };

  return (
    <>
    {!isDropdown && 
    <Nav.Link className={styles.myNavLink} >
      <div className="d-flex flex-column justify-content-center align-items-center">
        {selectIcon()}
        {text && <Headings variant="p06" text={text} />}
      </div>
    </Nav.Link>}

    {isDropdown &&
    <div className="d-flex flex-column justify-content-center align-items-center px-2">
      {isProfile ? <ProfilePic width="24px" src="https://placehold.it/24x24" /> : selectIcon()}
      <NavDropdown title={text} className={`${styles.dropdown} p-0`} ></NavDropdown>
    </div>
  }
    

    </>
  );
};

export default ButtonIcon;
