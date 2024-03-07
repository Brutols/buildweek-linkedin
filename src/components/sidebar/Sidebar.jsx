import React from "react";
import Headings from "../headings/Headings";
import styles from "./Sidebar.module.css";
import ButtonIcon from "../buttonIcon/ButtonIcon";
import ProfilePic from "../profilePic/ProfilePic";
import CustomButton from "../button/Button";

const Sidebar = () => {
  return (
    <>
      <div className={`${styles.box}`}>
        <div className="border-bottom p-3">
          <div className="d-flex justify-content-between pb-2 ">
            <Headings variant="h2" text="Lingue del profilo" />
            <ButtonIcon iconName="HiOutlinePencil" />
          </div>
          <Headings variant="p06" text="Italiano" />
        </div>
        <div className="border-bottom p-3">
          <div className="d-flex justify-content-between pb-2 ">
            <Headings variant="h2" text="Profilo pubblico e URL" />
            <ButtonIcon iconName="HiOutlinePencil" />
          </div>
          <Headings
            variant="p06"
            text="https//placeholder/ilmiofakeprofilolinkedin/linguaitalianaprofilo"
          />
        </div>
      </div>
      <div className={`${styles.box}`}>
        <div className="text-center px-3">
          <div className="d-flex justify-content-end align-items-center gap-2">
            <Headings variant="p06" text="Annuncio" />
            <ButtonIcon iconName="BsThreeDots" />
          </div>
          <Headings
            variant="p06"
            text="Giulia, make connections that metter most in your job search"
          />
          <div className="d-flex gap-3 justify-content-center align-items-center pt-2 pb-4">
             <ProfilePic width="60px" src="https://placehold.it/32x32"/>
             <img style={{width:"50px", height:"50px"}} src="https://blog.waalaxy.com/wp-content/uploads/2021/01/LIlogo.jpg" alt="logo premium" />

          </div>
          <Headings variant="h3" text="See who's viewed your profile in the last 90 days" />
          <div className="py-3">
          <CustomButton variant="outlinedBlue" text="Try for free!"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
