import React from "react";

const footerStyle = {
  display: "flex",
  alignItes: "center",
  justifyContent: "center",
  backgroundColor: "#4cd137",
  padding: "5px 0px",
  fontSize: "20px",
  fontFamily: "Roboto",
  fontWeight: "bold",
  color: "white",
};

function Footer() {
  return (
    <div style={footerStyle}>
      <p>Powerd By nk</p>
    </div>
  );
}

export default Footer;
