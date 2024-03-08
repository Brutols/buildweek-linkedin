import React, { useEffect } from "react";
import ButtonLogout from "../components/buttonLogout/ButtonLogout";
import MainLayout from "../layouts/MainLayout";
import Jumbotron from "../components/jumbotron/Jumbotron";
import { useDispatch, useSelector } from "react-redux";
import { allProfiles, getProfiles } from "../Slices/profilesSlice";
import { useParams } from "react-router-dom";
const ProfilePage = () => {
  const dispatch = useDispatch()
  const profiles = useSelector(allProfiles)
  const {id} = useParams()

  const url = `https://striveschool-api.herokuapp.com/api/profile/${id}`

  useEffect(() => {
    dispatch(getProfiles(url))
  }, [dispatch, url])
 
  return (
    <>
      <MainLayout>
        <div>{profiles.name}</div>
        <Jumbotron
          profile = {profiles}
        />
        <ButtonLogout />
      </MainLayout>
    </>
  );
};

export default ProfilePage;
