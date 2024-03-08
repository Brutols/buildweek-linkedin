import { useEffect } from "react";
import React from "react";
import MainLayout from "../layouts/MainLayout";
import RegisterForm from "../components/registerForm/RegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { trueAllProfiles, getAllProfiles } from "../Slices/profilesSlice";

const Homepage = () => {
  const dispatch = useDispatch()
  const allProfiles = useSelector(trueAllProfiles)
  console.log(allProfiles);
  
  useEffect(() => {
    dispatch(getAllProfiles("https://striveschool-api.herokuapp.com/api/profile/"))
  }, [dispatch]);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
        <RegisterForm
          profiles = {allProfiles}
        />
    </div>
  );
};

export default Homepage;
