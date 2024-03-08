import React, { useEffect } from "react";
import Headings from "../headings/Headings";
import ButtonIcon from "../buttonIcon/ButtonIcon";
import SingleExperience from "../singleExperience/SingleExperience";
import AddExperience from "../addExperience/AddExperience";
import { useDispatch, useSelector } from "react-redux";
import { allExperiences, getExperiences, isRefreshed } from "../../Slices/experiencesSlice";

const ExperiencesCard = ({ id, text, variant }) => {
  const isRefresh = useSelector(isRefreshed)
  const experiences = useSelector(allExperiences);
  const dispatch = useDispatch();

  const experiencesUrl = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`;

  const formatDate = (isoDate) => {
    const date = new Date(isoDate)

    const options = {
      year: "numeric",
      month: "long"
    }

    const formattedDate = new Intl.DateTimeFormat("it-IT", options).format(date)
    return formattedDate
  }

  useEffect(() => {
    dispatch(getExperiences(experiencesUrl));
  }, [dispatch, isRefresh]);

  return (
    <div className="rounded bg-white d-flex flex-column p-3 my-2">
      <div className="d-flex justify-content-between align-items-center">
        <Headings variant="h2" text={text} />
        <div className="d-flex gap-3">
          <AddExperience id={id} />
          <ButtonIcon iconName="HiOutlinePencil" />
        </div>
      </div>
      {experiences.map((experience) => {
        if (variant === "experience" && experience.area === "work") {
          return (
            <SingleExperience
              title={experience.role}
              company={experience.company}
              startDate={formatDate(experience.startDate)}
              endDate={formatDate(experience.endDate)}
              description={experience.description}
            />
          );
        } else if (variant === "education" && experience.area === "education") {
          return (
            <SingleExperience
              title={experience.role}
              company={experience.company}
              startDate={formatDate(experience.startDate)}
              endDate={formatDate(experience.endDate)}
              description={experience.description}
            />
          );
        }
      })}
    </div>
  );
};

export default ExperiencesCard;