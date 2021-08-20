import React, { useState } from "react";
import Logo from "../Images/logo1.png";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { Link } from "react-scroll";
import "../CSS/MobileNavBar.css";

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
function MobileNavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="MobileNavBar">
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
      <div className="Mobile_Data_NavBar">
        <div className="Mobile_Logo_Nav">
          {/* logo */}
          <Link to="home" smooth={true} duration={1000}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        {showMenu && (
          <div className="Mobile_Links_Nav">
            <Link
              style={{ cursor: "pointer" }}
              smooth={true}
              className="Mobile_link_Nav"
              to="home"
              duration={1000}
            >
              Home
            </Link>
            <Link
              style={{ cursor: "pointer" }}
              className="Mobile_link_Nav"
              to="quote"
              smooth={true}
              duration={1000}
            >
              Quote
            </Link>
            <Link
              style={{ cursor: "pointer" }}
              className="Mobile_link_Nav"
              to="skill"
              smooth={true}
              duration={1000}
            >
              Skills
            </Link>
            <Link
              style={{ cursor: "pointer" }}
              className="Mobile_link_Nav"
              to="project"
              smooth={true}
              duration={1000}
            >
              Projects
            </Link>
            <Link
              style={{ cursor: "pointer" }}
              className="Mobile_link_Nav"
              to="contact"
              smooth={true}
              duration={1000}
            >
              Contacts
            </Link>
          </div>
        )}
        <div
          className="Mobile_togglerMenu"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <CgClose className="Mobile_menu" />
          ) : (
            <CgMenuRightAlt className="Mobile_menu" />
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileNavBar;
