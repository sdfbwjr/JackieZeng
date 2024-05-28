import React from "react";
import articleContent from "../data/content";
import ProjectsList from "../components/ProjectsList";

const ProjectListPage = () => (
  <>
    <ProjectsList articles={articleContent} />{" "}
  </>
);

export default ProjectListPage;
