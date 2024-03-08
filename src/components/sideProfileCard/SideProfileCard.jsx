import React from 'react';
import ProfilePic from '../profilePic/ProfilePic';
import CustomButton from '../button/Button';
const SideProfileCard = () => {
    return (
        <div>
          <ProfilePic></ProfilePic> 
          
          <CustomButton>+ Segui</CustomButton>
        </div>
    );
};

export default SideProfileCard;