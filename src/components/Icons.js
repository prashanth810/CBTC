import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Icons = () => {
  const phoneNumber = "+91 8106124493 "; // Replace with your phone number
  const message = "Hello, I would like to inquire about your services.";

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="icons_icons">
      <div className="animate__animated  animate__fadeInLeft animate__slower">
        <a href="https://www.facebook.com/uppari.prashanth.39" target="blank">
          <FontAwesomeIcon
            className="homeicons icons_homes"
            icon={faFacebook}
            style={{ color: "#63E6BE" }}
          />
        </a>
        <a href="https://www.instagram.com/_prashanth_u/" target="blank">
          <FontAwesomeIcon
            className="homeicons icons_home"
            icon={faInstagram}
            style={{ color: "#63E6BE" }}
          />
        </a>
        {/* <a href="+91-8106124493" target="blank"> */}
        <FontAwesomeIcon
          className="homeicons icons_home"
          icon={faWhatsapp}
          style={{ color: "#63E6BE" }}
          onClick={handleClick}
        />

        <a href="https://www.linkedin.com/feed/" target="blank">
          <FontAwesomeIcon
            className="homeicons icons_home"
            icon={faLinkedinIn}
            style={{ color: "#63E6BE" }}
          />
        </a>
      </div>
      <div>
        <Link to="/aboutme-page">
          <button className="aboutmebtn"> More About Me </button>
        </Link>
      </div>
    </div>
  );
};

export default Icons;
