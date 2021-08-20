import React from "react";
import image from "../Images/Logo_Rm.png";
import Typist from "react-text-typist";
import { Link } from "react-scroll";
import { Button } from "@material-ui/core";
import cv from "../NikhilKavathiya.pdf";
import "../CSS/Home.css";
import SocialLink from "./SocialLink";

function HomeSection() {
  return (
    <div className="Home" id="home">
      <div className="image_Home">
        <img src={image} alt={"Nk_Image"} />
      </div>
      <div className="Data_Home">
        <Typist
          className="text_Home"
          sentences={[
            "Welcome to my portfolio",
            "I am an UI/UX Designer",
            "I am a MERN Stack Developer",
          ]}
          loop={true}
          typingSpeed={80}
          deletingSpeed={70}
        />

        <p className="para_Home">
          I am developing interactive and dynamic websites with high traffic
          rates and pageviews.Hard-working web developer with a flair for
          creating elegant solutions in the least amount of time. Also
          Developing an ecommerce webapp, customer web portal, documentary
          launch website, and donations webapp for a local charity. Regular
          attendee of web developer meetups and hackathons.
        </p>
        <SocialLink />
        <div className="button_Home">
          <Link
            className="Home_Hire_Button"
            to="contact"
            smooth={true}
            duration={1000}
          >
            <Button
              className="btn_Home"
              variant="contained"
              style={{ margin: "0px 5px" }}
            >
              Hire me
            </Button>
          </Link>
          <a href={cv} className="Home_Cv_Button" download>
            <Button
              className="btn_Home"
              variant="contained"
              style={{ margin: "0px 5px" }}
            >
              Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
