import React from "react";
import "./ProjectsListCard.css";
import MoreButton from "../MoreButton/MoreButton";
import { Link } from "react-router-dom";

const ProjectsListCard = ({ ProjectInfo }) => (
  <div className="projects-list-card">
    <Link to={`/Projects/${ProjectInfo.name}`}>
      <div className="image-container">
        {ProjectInfo.img ? (
          <img src={process.env.PUBLIC_URL + ProjectInfo.headerImg} />
        ) : null}
        {/* <img src={process.env.PUBLIC_URL + ProjectInfo.img[0]} /> */}
      </div>{" "}
    </Link>
    <div className="project-preview">
      <div className="project-title">
        <h1>{ProjectInfo.name}</h1>
        <p>{ProjectInfo.sideInfo[0]}</p>
      </div>
      <p>
        {ProjectInfo.description}
        <br></br>
        <MoreButton projectName={ProjectInfo.name} />
      </p>
    </div>
  </div>
);

export default ProjectsListCard;
