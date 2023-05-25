import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const GithubIcon: React.FC = () => {
  return (
    <li>
      <Link to="https://www.github.com/LuisPauloAlves" target="_blank">
        <FontAwesomeIcon
          icon={faGithub}
          size="xl"
          style={{ color: "#ededed" }}
        />
      </Link>
    </li>
  );
};

const LinkedinIcon: React.FC = () => {
  return (
    <li>
      <Link to="https://www.linkedin.com/in/luispauloalves" target="_blank">
        <FontAwesomeIcon
          icon={faLinkedin}
          size="xl"
          style={{ color: "#ededed" }}
        />
      </Link>
    </li>
  );
};

export { GithubIcon, LinkedinIcon };
