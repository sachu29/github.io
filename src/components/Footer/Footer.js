import React from "react";
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./Footer.css";
// import { Link } from 'react-router-dom';
import { Link } from "react-router-dom";
import Details from "../Data/Data";

const Footer = () => {
  let d = new Date();
  let currentYear = d.getFullYear();

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-container__left">
          <ul className="location">
            <li className="location__home">
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              {Details[0].Address}
            </li>
            <li className="location__home">
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <a href={`tel:${Details[0].PhoneNumber}`}>
                {Details[0].PhoneNumber}
              </a>
            </li>
            <li className="location__home">
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <a href={`mailto:${Details[0].MailId}`}>{Details[0].MailId}</a>
            </li>
          </ul>
        </div>
        <div className="footer-container__right">
          <h4 className="right__heading" style={{ marginBottom: "15px" }}>
            Catch me{" "}
            <span style={{ color: "rgb(248, 217, 15)", fontSize: "1.3rem" }}>
              @
            </span>
          </h4>
          <p>You can follow me on these social media's.</p>
          <ul className="social-media">
            <li className="social-media__instagram">
              <Link target={"_top"} to={"/"}>
                <FaInstagram
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </Link>
            </li>
            <li className="social-media__linkedin">
              <Link target={"_blank"} to={Details[0].LinkedIn}>
                <FaLinkedin
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </Link>
            </li>
            <li className="social-media__github">
              <Link target={"_blank"} to={Details[0].GitHub}>
                <FaGithub
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-container__copyrights">
        <h2 className="copyrights">
          All copyrights reserved{" "}
          <span style={{ color: "rgb(248, 217, 15)" }}>&copy;</span>{" "}
          {currentYear}
        </h2>
      </div>
    </div>
  );
};

export default Footer;
