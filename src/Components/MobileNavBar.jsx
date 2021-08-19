import React, { useState } from "react";
import Logo from "../Images/logo1.png";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
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
          <a href="https://nikhil-kavathiya-4a985.web.app/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        {showMenu && (
          <div className="Mobile_Links_Nav">
            <a className="Mobile_link_Nav" href="#home">
              Home
            </a>
            <a className="Mobile_link_Nav" href="#quote">
              Quote
            </a>
            <a className="Mobile_link_Nav" href="#skill">
              Skills
            </a>
            <a className="Mobile_link_Nav" href="#project">
              Projects
            </a>
            <a className="Mobile_link_Nav" href="#">
              Contacts
            </a>
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
