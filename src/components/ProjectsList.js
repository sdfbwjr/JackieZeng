import React from "react";
import { Link } from "react-router-dom";
import ProjectsListCard from "./ProjectsListCard/ProjectsListCard";
import MoreButton from "./MoreButton/MoreButton";

const ProjectsList = ({ articles }) => (
  <>
    {articles.map((article) => (
      <ProjectsListCard ProjectInfo={article} />
    ))}
  </>
);

export default ProjectsList;
