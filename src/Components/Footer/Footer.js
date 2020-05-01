import React from "react";
import "./Footer.scss";
import { faHeart, } from "@fortawesome/free-solid-svg-icons";
import {faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import tmdb from "../../Assets/stremly.jpg";
import tmdb from "../../Assets/logo2.png";
import github from "../../Assets/github.png";
import Thanos from "react-thanos";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <h1 onClick={() => {
          window.location.assign("https://www.instagram.com/streamly.in/");
        } }>
            <FontAwesomeIcon
              icon={faInstagram}
              size={30}
              color="#ddd"
              aria-hidden="true"
            />
          </h1>
          <h1 style={{marginLeft : '-400px'}}
          onClick={() => {
          window.location.assign("https://www.facebook.com/Streamlyin-104744014558602/?modal=admin_todo_tour");
        } }>
            <FontAwesomeIcon
              icon={faFacebook}
              size={30}
              
              color="#ddd"
              aria-hidden="true"
            />
          </h1>

        <div className="footer__center">
          <img
            src={tmdb}
            alt="tmdb"
            className="footer__logo-tmdb"
            onClick={() =>
              window.open(` https://www.themoviedb.org/en`, "_blank")
            }
          />

          <h1 className="footer__text footer__text--2">
            Copyright©2020, Streamly.in
          </h1>
        </div>

        <div
          className="footer__end"
          style={{color:'#ddd'}}
          onClick={() =>
            window.open(`https://github.com/darwin619/Netflix-Clone`, "_blank")
          }
        >
          <h3 className="footer__logo-github" > Contact us at: </h3>

          <h5 style={{marginTop: 0}} className="footer__logo-github">info@streamly.net</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
