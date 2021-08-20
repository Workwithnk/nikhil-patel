import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import SocialLink from "./SocialLink";
import Contact_wave from "../Images/Contact_wave.png";
import "../CSS/Contact.css";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <div className="data_contact">
        <div className="data">
          <AiOutlineMail className="icon_contact" />
          <span>nikhilkavathiya@gmail.com</span>
        </div>
        <div className="data">
          <ImLocation2 className="icon_contact" />
          <span>Nava Ujala,Kunkavav</span>
          <span>Amreli</span>
        </div>
      </div>
      <SocialLink />
      <img
        src={Contact_wave}
        style={{ width: "100%", marginBottom: "-11px" }}
        alt="wave"
      />
    </div>
  );
}

export default Contact;
