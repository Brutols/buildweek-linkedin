import CustomButton from "../components/button/Button";
import { useEffect, useState } from "react";
import React from "react";
import { Container } from "react-bootstrap";
import Headings from "../components/headings/Headings";

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
      <Container className="mt-5">
        <CustomButton variant="outlinedBlue" text="Add Profile Section" />
        <Headings variant="h1" text="Daniele Lorenzo Motta Locatelli" />
      </Container>
    </>
  );
};

export default Homepage;
