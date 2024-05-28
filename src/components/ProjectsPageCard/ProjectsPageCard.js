import React from "react";
import "./ProjectsPageCard.css";

const ProjectsPageCard = ({ content, image, heading, variation }) => {
  switch (variation) {
    case "0":
      if (heading) {
        return (
          <div className="proj-page-card">
            <div className="proj-page-card-text">
              <h1>{heading}</h1>
              <p>{content}</p>
            </div>
            <img src={process.env.PUBLIC_URL + image} />
          </div>
        );
      }
      return (
        <div className="proj-page-card">
          <div className="proj-page-card-text">
            <p>{content}</p>
          </div>
          <img src={process.env.PUBLIC_URL + image} />
        </div>
      );

    case "1":
      if (heading) {
        return (
          <div className="proj-page-card">
            <img src={process.env.PUBLIC_URL + image} />
            <div className="proj-page-card-text">
              <h1>{heading}</h1>
              <p>{content}</p>
            </div>
          </div>
        );
      }
      return (
        <div className="proj-page-card">
          <img src={process.env.PUBLIC_URL + image} />
          <div className="proj-page-card-text">
            <p>{content}</p>
          </div>
        </div>
      );

    case "2":
      if (heading) {
        return (
          <div className="proj-page-card-text-2">
            <h1>{heading}</h1>
            <p>{content}</p>
          </div>
        );
      }
      return (
        <div className="proj-page-card-text-2">
          <p>{content}</p>
        </div>
      );

    case "3":
      if (heading) {
        return (
          <div className="proj-page-card-img">
            <h1>{heading}</h1>
            <p>{content}</p>
            <img src={process.env.PUBLIC_URL + image} />
          </div>
        );
      }
      return (
        <div className="proj-page-card-img">
          <img src={process.env.PUBLIC_URL + image} />
        </div>
      );

    default:
      return (
        <div className="proj-page-card">
          <img src={process.env.PUBLIC_URL + image} />
          <p>{content}</p>
        </div>
      );
  }
};

export default ProjectsPageCard;
