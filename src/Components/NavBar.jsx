import React from "react";
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
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="Links_Nav">
          <a className="link_Nav" href="#home">
            Home
          </a>
          <a className="link_Nav" href="#quote">
            Quote
          </a>
          <a className="link_Nav" href="#skill">
            Skills
          </a>
          <a className="link_Nav" href="#project">
            Projects
          </a>
          <a className="link_Nav" href="#">
            Contacts
          </a>
        </div>
      </div>
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
    </div>
  );
}

export default NavBar;
