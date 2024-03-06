import { useEffect } from "react";
import React from "react";
import MainLayout from "../layouts/MainLayout";
import RegisterForm from "../components/registerForm/RegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { allProfiles, getProfiles } from "../Slices/profilesSlice";

const Homepage = () => {
  const dispatch = useDispatch()
  const profiles = useSelector(allProfiles)
  console.log(profiles);
  
  useEffect(() => {
    dispatch(getProfiles())
  }, [dispatch]);

  return (
    <>
      <MainLayout>
        <RegisterForm
          profiles = {profiles}
        />
      </MainLayout>
    </>
  );
};

export default Homepage;
