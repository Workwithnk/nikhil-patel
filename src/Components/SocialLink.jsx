import React from "react";
import { FaDev, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import "../CSS/SocialLink.css";

function SocialLink() {
  return (
    <div className="socialLink_Home">
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
    </div>
  );
}

export default SocialLink;
