import React, { useEffect } from "react";
import ButtonLogout from "../components/buttonLogout/ButtonLogout";
import MainLayout from "../layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { allProfiles, getProfiles } from "../Slices/profilesSlice";
const ProfilePage = () => {
  const dispatch = useDispatch()
  const profiles = useSelector(allProfiles)
  console.log(profiles);

  useEffect(() => {
    dispatch(getProfiles())
  }, [dispatch])

  return (
    <>
      <MainLayout>
        <div>CIAO SONO LA PROFILE PAGE</div>
        <ButtonLogout />
      </MainLayout>
    </>
  );
};

export default ProfilePage;
