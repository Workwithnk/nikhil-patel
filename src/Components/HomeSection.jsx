import React from "react";
import image from "../Images/Logo_Rm.png";
import Typist from "react-text-typist";

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
        {/* <div className="socialLink_Home">
          <a
            href="https://www.facebook.com/nikhil.kavathiya.378"
            className="socialIcons"
          >
            <FaFacebook className=" icon" />
          </a>
          <a
            href="https://www.instagram.com/i._.am._.nk/?igshid=1hevhi9xzvwul"
            className="socialIcons"
          >
            <FaInstagram className=" icon" />
          </a>
          <a href="https://dev.to/workwithnk" className="socialIcons">
            <FaDev className=" icon" />
          </a>
          <a href="https://github.com/workwithnk/" className="socialIcons">
            <FaGithub className="icon" />
          </a>
        </div> */}
        <SocialLink />
        <div className="button_Home">
          <a herf="#contact">
            <Button
              className="btn_Home"
              variant="contained"
              style={{ margin: "0px 5px" }}
            >
              Hire me
            </Button>
          </a>
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
