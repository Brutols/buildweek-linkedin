import React, { useEffect } from "react";
import ButtonLogout from "../components/buttonLogout/ButtonLogout";
import MainLayout from "../layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { allProfiles, getProfiles } from "../Slices/profilesSlice";
import { useParams } from "react-router-dom";
import { allExperiences, getExperiences } from "../Slices/experiencesSlice";
import { Container } from "react-bootstrap";
import ExperiencesCard from "../components/experiencesCard/ExperiencesCard";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const profiles = useSelector(allProfiles);
  const experiences = useSelector(allExperiences);
  const { id } = useParams();
  console.log(experiences);

  const profilesUrl = `https://striveschool-api.herokuapp.com/api/profile/${id}`;
  const experiencesUrl = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`;

  useEffect(() => {
    dispatch(getProfiles(profilesUrl));
    dispatch(getExperiences(experiencesUrl));
  }, [dispatch, profilesUrl, experiencesUrl]);

  return (
    <>
      <MainLayout>
        {/* <div>{profiles.name}</div>
        <ButtonLogout /> */}
        <Container className="row mx-auto">
          <div className="col-9 p-5">
          <ExperiencesCard />
          </div>
          <div className="col-3"></div>
        </Container>    
      </MainLayout>
    </>
  );
};

export default ProfilePage;
