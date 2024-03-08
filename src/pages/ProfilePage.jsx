import React, { useEffect } from "react";
import ButtonLogout from "../components/buttonLogout/ButtonLogout";
import MainLayout from "../layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { allProfiles, getProfiles, getAllProfiles } from "../Slices/profilesSlice";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import ExperiencesCard from "../components/experiencesCard/ExperiencesCard";
import Sidebar from "../components/sidebar/Sidebar";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const profiles = useSelector(allProfiles);
  const { id } = useParams();

  const profilesUrl = `https://striveschool-api.herokuapp.com/api/profile/${id}`;
  useEffect(() => {
    dispatch(getProfiles(profilesUrl));
    dispatch(getAllProfiles("https://striveschool-api.herokuapp.com/api/profile/"))
  }, [dispatch, profilesUrl]);

  return (
    <>
      <MainLayout>
        {/* <div>{profiles.name}</div>
        <ButtonLogout /> */}
        <Container className="row mx-auto">
          <div className="col-9 p-5">
          <ExperiencesCard id={id} text="Experience" variant="experience" />
          <ExperiencesCard id={id} text="Education" variant="education" />
          </div>
          <div className="col-3">
          <Sidebar/>
          </div>
        </Container>    
      </MainLayout>
    </>
  );
};

export default ProfilePage;
