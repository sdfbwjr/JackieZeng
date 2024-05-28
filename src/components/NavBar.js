import React from "react";
import { Link } from "react-router-dom";
import Resume from "../documents/Liu_Thomas_Resume.pdf";

const NavBar = () => (
  <nav className="navbar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Projects">Projects</Link>
      </li>
      <li>
        <a href={Resume} targe="_blank">
          Résumé
        </a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
