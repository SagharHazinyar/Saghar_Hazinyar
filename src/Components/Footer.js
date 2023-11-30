import React from "react";
// import { Link } from "react-scroll";
import "../Style/Footer.css";
import { FaLinkedin, FaGithub, FaTwitter, FaTelegram } from "react-icons/fa";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add the solid icons to the library
library.add(fas);

export default function Footer() {
  return (
    <div className="footer pb-5 text-center">
      <p>©Saghar Hazinyar 2023</p>
      <a href="https://t.me/saghar_hazinyar">
        <FaTelegram className="foot-icon" />
      </a>
      <a href="https://twitter.com/S_Hazinyar">
        <FaTwitter className="foot-icon" />
      </a>
      <a href="https://www.linkedin.com/in/saghar-hazinyar-933ab2253/">
        <FaLinkedin className="foot-icon" />
      </a>
      <a href="https://github.com/SagharHazinyar">
        <FaGithub className="foot-icon" />
      </a>
    </div>
  );
}
