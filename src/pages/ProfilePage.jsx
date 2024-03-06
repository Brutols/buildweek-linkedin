import React, { useEffect, useState } from 'react';
import ButtonLogout from '../components/buttonLogout/ButtonLogout';
import { useParams } from "react-router-dom";
const ProfilePage = () => {

  const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWU3OWZiMDhlMWMzYTAwMTkyMjg3YTQiLCJpYXQiOjE3MDk2Nzg1MTMsImV4cCI6MTcxMDg4ODExM30.A-OQ2-69n0g_XZ79JWwnk-G8OooyZ9k8fe7no4E7k4g'
  const [personalProfile, setPersonalProfile] = useState({});
  const {id} = useParams()

  console.log(personalProfile);

  useEffect(() => {
    const getProfile = async () => {
      const result = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
          },
        }
      );
      const data = await result.json();
      setPersonalProfile(data);
      
    };
    getProfile();
  }, [id]);

  return (
    <>
        <div>
          <h1>{personalProfile.name && personalProfile.name}</h1>
          <h2>{personalProfile.surname && personalProfile.surname}</h2>
          <p>{personalProfile.bio && personalProfile.bio}</p>
          CIAO SONO LA PROFILE PAGE
        </div>
        <ButtonLogout

        />
    </>
  )
}

export default ProfilePage;