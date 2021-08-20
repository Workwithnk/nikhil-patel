import React from "react";
import { Link } from "react-scroll";
import Logo from "../Images/logo1.png";
import "../CSS/NavBar.css";
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function NavBar() {
  return (
    <div className="NavBar">
      <div className="Data_NavBar">
        <div className="Logo_Nav">
          {/* logo */}
          <Link
            style={{ cursor: "pointer" }}
            to="home"
            smooth={true}
            duration={1000}
          >
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="Links_Nav">
          <Link
            style={{ cursor: "pointer" }}
            smooth={true}
            className="link_Nav"
            to="home"
            duration={1000}
          >
            Home
          </Link>
          <Link
            style={{ cursor: "pointer" }}
            className="link_Nav"
            to="quote"
            smooth={true}
            duration={1000}
          >
            Quote
          </Link>
          <Link
            style={{ cursor: "pointer" }}
            className="link_Nav"
            to="skill"
            smooth={true}
            duration={1000}
          >
            Skills
          </Link>
          <Link
            style={{ cursor: "pointer" }}
            className="link_Nav"
            to="project"
            smooth={true}
            duration={1000}
          >
            Projects
          </Link>
          <Link
            style={{ cursor: "pointer" }}
            className="link_Nav"
            to="contact"
            smooth={true}
            duration={1000}
          >
            Contacts
          </Link>
        </div>
      </div>
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
    </div>
  );
}

export default NavBar;
