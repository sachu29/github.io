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
import { Link } from 'react-router-dom';

const Footer = () => {
  let d = new Date()
  let currentYear = d.getFullYear()

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
              12/A, W.G.C ROAD. 628001
            </li>
            <li className="location__home">
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <a href="tel:7598029471">7598029471</a>
            </li>
            <li className="location__home">
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <a href="mailto:saranms2905@gamil.com">saranms2905@gamil.com</a>
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
              <Link
                target={"_blank"}
                to={"https://www.linkedin.com/in/saran-ms-9789692a7/"}
              >
                <FaLinkedin
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </Link>
            </li>
            <li className="social-media__github">
              <Link target={"_blank"} to={"https://github.com/sachu29"}>
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
          <span style={{ color: "rgb(248, 217, 15)" }}>&copy;</span> {currentYear}
        </h2>
      </div>
    </div>
  );
};

export default Footer;
