import CustomButton from "../components/button/Button";
import { useEffect, useState } from "react";
import React from "react";
import { Container } from "react-bootstrap";
import Headings from "../components/headings/Headings";
import MainLayout from "../layouts/MainLayout";

const Homepage = () => {
  const [profiles, setProfiles] = useState([]);
  console.log(profiles);

  useEffect(() => {
    const getProfiles = async () => {
      const result = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_ACCESSTOKEN}`,
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
        
      </MainLayout>
    </>
  );
};

export default Homepage;
