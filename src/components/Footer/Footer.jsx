import React from "react";
import "./Footer.css";
import instagram from "./../../assets/instagram.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <a
          className="footer"
          href="https://www.instagram.com/_the_silver_fitness_club_/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a>

        <span>Copyright © 2022 Silver fitness club. All rights reserved</span>
        <span>Developed by HK Labs</span>
      </div>
    </div>
  );
};

export default Footer;
