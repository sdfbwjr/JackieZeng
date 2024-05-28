import React from "react";
import ProjectsPageCard from "../../components/ProjectsPageCard/ProjectsPageCard";
import articleContent from "../../data/content";
import NotFoundPage from "../NotFoundPage";
import "./ProjectPage.css";
const ProjectPage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  if (!article) return <NotFoundPage />;
  return (
    <>
      <div className="proj-page">
        <img
          className="proj-page-header-img"
          src={process.env.PUBLIC_URL + article.headerImg}
        />
        <div className="proj-page-title">
          <h1>{article.title}</h1>
          <div className="proj-page-side-info">
            {article.sideInfo.map((sideInfo, key) => (
              <p>{article.sideInfo[key]}</p>
            ))}
          </div>
        </div>
        {article.layout.map((layout, key) => (
          <ProjectsPageCard
            content={article.content[key]}
            image={article.img[key]}
            heading={article.heading[key]}
            variation={article.layout[key]}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectPage;
