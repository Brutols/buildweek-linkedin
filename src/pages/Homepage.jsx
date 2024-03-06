import CustomButton from "../components/button/Button";
import { useEffect, useState } from "react";
import React from "react";
import { Container } from "react-bootstrap";
import Headings from "../components/headings/Headings";
import MainLayout from "../layouts/MainLayout";
import RegisterForm from "../components/registerForm/RegisterForm";

const Homepage = () => {
  const [profiles, setProfiles] = useState([]);
  console.log(profiles);
  // process.env.REACT_APP_ACCESSTOKEN
  const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWU3OWZiMDhlMWMzYTAwMTkyMjg3YTQiLCJpYXQiOjE3MDk2Nzg1MTMsImV4cCI6MTcxMDg4ODExM30.A-OQ2-69n0g_XZ79JWwnk-G8OooyZ9k8fe7no4E7k4g'
  useEffect(() => {
    const getProfiles = async () => {
      const result = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
          },
        }
      );
      const data = await result.json();
      setProfiles(data);
    };
    getProfiles();
  }, []);

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
