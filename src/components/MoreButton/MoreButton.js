import React from "react";
import { Link } from "react-router-dom";

const MoreButton = ({ projectName }) => (
  <div className="more-button">
    {" "}
    <Link to={`/Projects/${projectName}`}>More Info</Link>
  </div>
);
export default MoreButton;
